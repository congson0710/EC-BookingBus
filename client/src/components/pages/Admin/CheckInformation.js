import React, { Component } from 'react';
import { Card } from 'antd';
import AdminLayout from '../../Admin/AdminLayout';
import axiosInstance from '../../../axios';
class CheckInformation extends Component {
  // _renderBusManageTable() {
  //   axiosInstance
  //     .get('/api/get-buses')
  //     .then(res => {
  //       res.data.map(item => (
  //         <tr>
  //           <td>
  //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
  //             provident modi veniam itaque quibusdam officia obcaecati
  //             dignissimos. Neque amet, dicta fugit nulla iure, recusandae, quos
  //             quia animi aut qui officia?
  //           </td>
  //           <td>
  //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
  //             provident modi veniam itaque quibusdam officia obcaecati
  //             dignissimos. Neque amet, dicta fugit nulla iure, recusandae, quos
  //             quia animi aut qui officia?
  //           </td>
  //           <td>
  //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
  //             provident modi veniam itaque quibusdam officia obcaecati
  //             dignissimos. Neque amet, dicta fugit nulla iure, recusandae, quos
  //             quia animi aut qui officia?
  //           </td>
  //         </tr>
  //       ));
  //     })
  //     .catch(err => console.log(err.message));
  // }
  render() {
    return (
      <AdminLayout>
        <div className="row">
          <div className="col-6">
            <Card title="Quản lý xe" bordered>
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Biển số</th>
                    <th>Số chỗ ngồi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>81-S5 7584</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>81-S5 7585</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>81-S5 7588</td>
                    <td>30</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
          <div className="col-6">
            <Card title="Biểu giá vé" bordered>
            <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nơi đi</th>
                    <th>Nơi đến</th>
                    <th>Giá vé</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Đà Lạt</td>
                    <td>Hồ Chí Minh</td>
                    <td>220.000 VND</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Hồ Chí Minh</td>
                    <td>Đà Lạt</td>
                    <td>220.000 VND</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Nha Trang</td>
                    <td>Hồ Chí Minh</td>
                    <td>180.000 VND</td>
                  </tr>
                </tbody>
              </table>
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
