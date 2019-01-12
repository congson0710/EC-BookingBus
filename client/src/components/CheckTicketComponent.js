import React, {Component} from 'react';
import {Modal} from 'antd';
import flow from 'lodash/fp/flow';
import get from 'lodash/fp/get';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import {connect} from 'react-redux';

import {
  fetchListPaidTicketThunkCreator,
  cancelTicketThunkCreator,
} from '../redux/actions/userAction.js';
import {listPaidTicketSelector} from '../redux/selectors/userSelectors.js';

const getBusCompanyName = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('bus'),
    get('bus_company'),
    get('companyName'),
  )(rowData);

const getStartPlace = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('startPlace'),
    get('placeName'),
  )(rowData);

const getEndPlace = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('endPlace'),
    get('placeName'),
  )(rowData);

const getSeatNumber = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('seatNumber'),
  )(rowData);

const getPrice = rowData =>
  flow(
    get('ticket'),
    get('price'),
  )(rowData);

const getStatus = rowData =>
  flow(
    get('ticket'),
    get('status'),
  )(rowData);

const getTime = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('startTime'),
  )(rowData);

const getTicketID = rowData =>
  flow(
    get('ticket'),
    get('ticketID'),
  )(rowData);

class CheckTicketComponent extends Component {
  state = {
    modal: {
      isModalOpen: false,
      currentTicketId: null,
    },
  };

  _handleCloseModal = () => {
    this.setState({
      modal: {
        isModalOpen: false,
        currentTicketId: null,
      },
    });
  };

  _handleOk = () => {
    const {modal} = this.state;
    const {cancelTicket} = this.props;
    cancelTicket({ticketID: modal.currentTicketId});
    this._handleCloseModal();
  };

  _handleCancelTicket = ticketId => {
    this.setState({
      modal: {
        isModalOpen: true,
        currentTicketId: ticketId,
      },
    });
  };

  _renderListTicket(listPaidTicket = []) {
    return (
      <React.Fragment>
        <tbody>
          {listPaidTicket.length > 0 ? listPaidTicket.map(ticket => (
            <tr key={Math.random()}>
              <td>{getBusCompanyName(ticket)}</td>
              <td>{getStartPlace(ticket)}</td>
              <td>{getTime(ticket)}</td>
              <td>{getSeatNumber(ticket)}</td>
              <td>{getPrice(ticket)}</td>
              <td>
                <button
                  onClick={() => this._handleCancelTicket(getTicketID(ticket))}
                  className="btn btn-danger">
                  Hủy vé
                </button>
              </td>
            </tr>
          )) : <tr><td colSpan='6' className="text-center">Không có dữ liệu</td></tr>}
        </tbody>
      </React.Fragment>
    );
  }

  render() {
    const {modal} = this.state;
    const {listPaidTicket} = this.props;
    return (
      <div className="body-section">
        <div className="container">
          <h1 className="text-white text-center">Danh sách vé</h1>
          <div className="table-responsive">
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
              {this._renderListTicket(listPaidTicket)}
            </table>
          </div>
        </div>

        <Modal
          title="Hủy vé"
          visible={modal.isModalOpen}
          onOk={this._handleOk}
          onCancel={this._handleCloseModal}>
          <p>Bạn có chắc chắn muốn hủy vé này?</p>
        </Modal>
      </div>
    );
  }
}

const connectToRedux = connect(
  state => ({
    listPaidTicket: listPaidTicketSelector(state),
  }),
  dispatch => ({
    fetchListPaidTicket: flow(
      fetchListPaidTicketThunkCreator,
      dispatch,
    ),
    cancelTicket: flow(
      cancelTicketThunkCreator,
      dispatch,
    ),
  }),
);

const withLifecycleHOC = lifecycle({
  componentDidMount() {
    this.props.fetchListPaidTicket();
  },
});

const enhance = compose(
  connectToRedux,
  withLifecycleHOC,
);

export default enhance(CheckTicketComponent);
