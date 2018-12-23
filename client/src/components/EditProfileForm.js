import React, { Component } from 'react';
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

class EditProfileForm extends Component {
  state = {
    info: {
      email: '',
      userName: '',
      phone: ''
    }
  };
  _handleReset = e => {
    e.preventDefault();
    this.setState({
      info: { ...this.props.userInfo }
    });
  };

  _handleChangeInfo = e => {
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
  async componentDidMount() {
    await this.props.fetchUserInfo();
    this.setState({
      info: this.props.userInfo
    });
  }
  render() {
    const { info } = this.state;

    return (
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
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileForm);
