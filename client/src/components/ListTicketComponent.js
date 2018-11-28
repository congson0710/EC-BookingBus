import React, { Component } from 'react';

class ListTicketComponent extends Component {
  _renderListTicket() {
    
    return (
      <React.Fragment>
        <tr>
          <td>123</td>
          <td>12/12/12</td>
          <td>12/12/12</td>
          <td>Tân Hoa Châu</td>
          <td>250000</td>
          <td>
            <button className="btn btn-danger">Mua vé</button>
          </td>
        </tr>
        <tr>
          <td>123</td>
          <td>12/12/12</td>
          <td>12/12/12</td>
          <td>Tân Hoa Châu</td>
          <td>250000</td>
          <td>
            <button className="btn btn-danger">Mua vé</button>
          </td>
        </tr>
        <tr>
          <td>123</td>
          <td>12/12/12</td>
          <td>12/12/12</td>
          <td>Tân Hoa Châu</td>
          <td>250000</td>
          <td>
            <button className="btn btn-danger">Mua vé</button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
  render() {
    return (
      <div className="body-section">
        <div className="list-ticket-container">
          <div className="container">
            <h1 className="text-white text-center mb-5">Danh sách vé ngày 11/11/2019</h1>
            <table className="table table-custom">
              <tr>
                <th>Mã vé</th>
                <th>Ngày đi</th>
                <th>Ngày đến</th>
                <th>Nhà xe</th>
                <th>Giá vé</th>
                <th></th>
              </tr>
              {this._renderListTicket()}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTicketComponent;
