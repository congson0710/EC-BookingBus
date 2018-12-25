import React, { Component } from 'react';
import { Card } from 'antd';
class CheckInformation extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <Card title="Card title" bordered>
              Card content
            </Card>
          </div>
          <div className="col-6">
            <Card title="Card title" bordered>
              Card content
            </Card>
          </div>
          <div className="col-12">
            <div className="mt-5">
              <Card title="Card title" bordered>
                Card content
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckInformation;
