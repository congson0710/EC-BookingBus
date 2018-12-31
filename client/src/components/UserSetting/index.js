import React, {Component} from 'react';
import {Tabs} from 'antd';

import EditProfileForm from './EditProfile';
import ChangePasswordForm from './ChangePassword';
import History from './History';

class UserSetting extends Component {
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
                <History />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default UserSetting;
