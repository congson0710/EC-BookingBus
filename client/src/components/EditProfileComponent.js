import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import { fetchUserInfo, setUserInfo } from '../redux/actions/userAction';

function mapStateToProps(state) {
  return {
    userInfo: state.userReducer.userData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserInfo: () => dispatch(fetchUserInfo()),
    updateUserInfo: data => dispatch(setUserInfo(data))
  };
}
class EditProfileComponent extends Component {
  state = {
    infoDefault: {},
    info: {
      email: '',
      userName: '',
      phone: ''
    }
  };
  _handleReset = e => {
    e.preventDefault();
  };

  async componentDidMount() {
    await this.props.fetchUserInfo();
    this.setState({
      infoDefault: this.props.userInfo,
      info: this.props.userInfo
    });
  }
  _handleChangeInfo = (e) => {
    e.preventDefault();
    const { userName, phone } = this.state.info;
    this.props.updateUserInfo({ userName, phone });
  };
  _handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(prevState => ({
      info: {
        ...prevState.info,
        [name]: value
      }
    }));
  };
  render() {
    const { info } = this.state;
    const { TabPane } = Tabs;
    return (
      <div className="body-section">
        <div className="container">
          <div className="edit-profile">
            <Tabs defaultActiveKey="1" size="large" animated={false}>
              <TabPane tab="Thông tin cá nhân" key="1">
                <form
                  onSubmit={this._handleChangeInfo}
                  style={{ maxWidth: '600px', margin: '0 auto' }}
                >
                  <label className="mt-3 auth-form__label">Tên đăng nhập</label>
                  <input
                    value={info.email}
                    type="text"
                    className="find_input"
                    readOnly
                    disabled
                  />
                  <label className="mt-3 auth-form__label">Họ và tên</label>
                  <input
                    value={info.userName}
                    name="userName"
                    type="text"
                    className="find_input"
                    onChange={this._handleInputChange}
                  />
                  <label className="mt-3 auth-form__label">Số điện thoại</label>
                  <input
                    value={info.phone}
                    name="phone"
                    type="text"
                    className="find_input"
                    onChange={this._handleInputChange}
                  />
                  <div className="text-center">
                    <button className="mt-4 main_button">Chỉnh sửa</button>
                    <button
                      className="mt-4 ml-2 main_button main_button-secondary"
                      onClick={this._handleReset}
                    >
                      Hủy
                    </button>
                  </div>
                </form>
              </TabPane>
              <TabPane tab="Đổi mật khẩu" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Lịch sử đặt, hủy vé" key="3">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileComponent);
