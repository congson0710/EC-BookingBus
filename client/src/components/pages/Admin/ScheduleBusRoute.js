import React, { Component } from 'react';
import { Card } from 'antd';
import AdminLayout from '../../Admin/AdminLayout';
class ScheduleBusRoute extends Component {
  render() {
    return (
      <AdminLayout>
        <Card title="Lịch trình tuyến xe" bordered>
          Card content
        </Card>
      </AdminLayout>
    );
  }
}

export default ScheduleBusRoute;
