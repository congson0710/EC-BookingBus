import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import EditProfile from './components/pages/EditProfile';
import LoginPage from './components/pages/Login';
import RegisterPage from './components/pages/Register';
import ListTicketPage from './components/pages/ListTicket';
import BookingTicket from './components/pages/BookingTicket';
import CheckTicket from './components/pages/CheckTicket';
import BusRouteManagement from './components/pages/BusRouteManagement';
import Payment from './components/pages/Payment';
import { history } from './redux';

import './App.scss';
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/chinh-sua-thong-tin" component={EditProfile} />
          <Route exact path="/dang-nhap" component={LoginPage} />
          <Route exact path="/dang-ki" component={RegisterPage} />
          <Route path="/danh-sach-ve-xe" component={ListTicketPage} />
          <Route path="/dat-ve" component={BookingTicket} />
          <Route path="/kiem-tra-ve" component={CheckTicket} />
          <Route path="/quan-li-chuyen-xe" component={BusRouteManagement} />
          <Route path="/thanh-toan" component={Payment} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
