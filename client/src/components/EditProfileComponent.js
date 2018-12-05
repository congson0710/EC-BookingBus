import React, { Component } from 'react';
import { Tabs } from 'antd';
class EditProfileComponent extends Component {
  render() {
    const { TabPane } = Tabs;
    return (
      <div className="body-section">
        <div className="container">
          <div className="edit-profile">
            <Tabs defaultActiveKey="1" size="large" animated={false}>
              <TabPane tab="Thông tin cá nhân" key="1">
                <form>
                  <label className="mt-3 auth-form__label">Họ và tên</label>
                  <input type="text" className="find_input" />
                  <label className="mt-3 auth-form__label">Tên đăng nhập</label>
                  <input type="text" className="find_input" />
                  <label className="mt-3 auth-form__label">Số điện thoại</label>
                  <input type="text" className="find_input" />
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

export default EditProfileComponent;
