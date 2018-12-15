import React, { Component } from 'react';
import { Tabs } from 'antd';

import EditProfileForm from './EditProfileForm';
import ChangePasswordForm from './ChangePasswordForm';

class EditProfileComponent extends Component {
  render() {
    const { TabPane } = Tabs;
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
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfileComponent;
