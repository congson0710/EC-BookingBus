import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class CheckTicketComponent extends Component {
  state = {
    modal: {
      isModalOpen: false,
      currentTicketId: null
    }
  };
  _handleCloseModal = () => {
    this.setState({
      modal: {
        isModalOpen: false,
        currentTicketId: null
      }
    });
  };

  _handleOk = () => {
    const { modal } = this.state;
    // console.log('Xoa ve nay roi', modal.currentTicketId)
    this._handleCloseModal();
  };
  _handleCancelTicket = ticketId => {
    this.setState({
      modal: {
        isModalOpen: true,
        currentTicketId: ticketId
      }
    });
  };

  _renderListTicket(data = null) {
    return (
      <React.Fragment>
        <tbody>
          <tr>
            <td>Tân Hoa Châu</td>
            <td>1241284</td>
            <td>12/12/12</td>
            <td>a04</td>
            <td>250000</td>
            <td>
              <button onClick={this._handleCancelTicket.bind(this, 120)} className="btn btn-danger">Hủy vé</button>
            </td>
          </tr>
          <tr>
            <td>Tân Hoa Châu</td>
            <td>1241284</td>
            <td>12/12/12</td>
            <td>a04</td>
            <td>250000</td>
            <td>
              <button className="btn btn-danger">Hủy vé</button>
            </td>
          </tr>
          <tr>
            <td>Tân Hoa Châu</td>
            <td>1241284</td>
            <td>12/12/12</td>
            <td>a04</td>
            <td>250000</td>
            <td>
              <button className="btn btn-danger">Hủy vé</button>
            </td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
  render() {
    const { modal } = this.state;
    return (
      <div className="body-section">
        <div className="container">
          <h1 className="text-white text-center">Danh sách vé</h1>
          <table className="table table-custom">
            <thead>
              <tr>
                <th>Nhà xe</th>
                <th>Số xe</th>
                <th>Thời gian đi</th>
                <th>Số ghế</th>
                <th>Giá vé</th>
                <th />
              </tr>
            </thead>
            {this._renderListTicket()}
          </table>
        </div>

        <Modal
          title="Hủy vé"
          visible={modal.isModalOpen}
          onOk={this._handleOk}
          onCancel={this._handleCloseModal}
        >
          <p>Bạn có chắc chắn muốn hủy vé này?</p>
        </Modal>
      </div>
    );
  }
}

export default CheckTicketComponent;
