import React, {Component} from 'react';
import Spinner from 'react-md-spinner';
import {Tabs} from 'antd';
import {connect} from 'react-redux';

import EditProfileForm from './EditProfile';
import ChangePasswordForm from './ChangePassword';
import History from './History';
import {isCancelingTicketSelector} from '../../redux/selectors/userSelectors';

class UserSetting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {TabPane} = Tabs;
    return (
      <div className="body-section">
        <div className="container">
          <div className="edit-profile">
            <Tabs defaultActiveKey="1" size="large" animated={false}>
              <TabPane tab="Thông tin cá nhân" key="1">
                <EditProfileForm />
              </TabPane>
              <TabPane tab="Đổi mật khẩu" key="2">
                <ChangePasswordForm />
              </TabPane>
              <TabPane tab="Lịch sử đặt, hủy vé" key="3">
                {this.props.isCancelingTicket ? (
                  <Spinner size={60} style={{textAlign: 'center'}} />
                ) : (
                  <History />
                )}
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

const connectToRedux = connect(
  state => ({
    isCancelingTicket: isCancelingTicketSelector(state),
  }),
  null,
);

export default connectToRedux(UserSetting);
