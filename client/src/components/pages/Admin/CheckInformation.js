import React, { Component } from 'react';
import { Card } from 'antd';
import AdminLayout from '../../Admin/AdminLayout';
class CheckInformation extends Component {
  render() {
    return (
      <AdminLayout>
        <div className="row">
          <div className="col-6">
            <Card title="Quản lý xe" bordered>
              Card content
            </Card>
          </div>
          <div className="col-6">
            <Card title="Biểu giá vé" bordered>
              Card content
            </Card>
          </div>
          <div className="col-12">
            <div className="mt-5">
              <Card title="Tuyến xe khách" bordered>
                Card content
              </Card>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default CheckInformation;
