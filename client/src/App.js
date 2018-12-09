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
import  Auth from './lib/auth';
import { ROLE } from './common/const';
import WithAuthorization from './components/AuthHOC';
import { setToken } from './axios';

import './App.scss';

class App extends Component {
  async componentDidMount() {
    try {
      const currentToken = localStorage.getItem('token') || '';
      setToken(currentToken);
      this.userInfo = await Auth.getUserInfo();
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/chinh-sua-thong-tin"
            component={WithAuthorization([ROLE.CLIENT, ROLE.ADMIN])(EditProfile)}
          />
          <Route
            exact
            path="/dang-nhap"
            component={WithAuthorization([ROLE.GUEST])(LoginPage)}
          />
          <Route
            exact
            path="/dang-ki"
            component={WithAuthorization([ROLE.GUEST])(RegisterPage)}
          />
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
