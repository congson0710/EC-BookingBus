import React, { Component } from 'react';
import { Popover, Avatar } from 'antd';

class AdminHeader extends Component {
  state = {
    visible: false
  };
  _handleVisibleChange = visible => {
    this.setState({ visible });
  };

  _renderContent = () => {
    return (
      <ul className="admin-header-list">
        <li>Thông tin</li>
        <li>Đăng xuất</li>
      </ul>
    );
  };
  render() {
    return (
      <div className="admin-header d-flex justify-content-end align-items-center">
        <Popover
          content={this._renderContent()}
          trigger="click"
          placement="bottomRight"
          visible={this.state.visible}
          onVisibleChange={this._handleVisibleChange}
        >
          <Avatar size="large" className="cursor-pointer" icon="user" />
        </Popover>
      </div>
    );
  }
}

export default AdminHeader;
