import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import LoginPage from './components/pages/Login';
import RegisterPage from './components/pages/Register';
import ListTicketPage from './components/pages/ListTicket';
import BookingTicket from './components/pages/BookingTicket';
import CheckTicket from './components/pages/CheckTicket';
import Payment from './components/pages/Payment';


import './App.scss';
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/dang-nhap" component={LoginPage} />
          <Route exact path="/dang-ki" component={RegisterPage} />
          <Route path="/danh-sach-ve-xe" component={ListTicketPage} />
          <Route path="/dat-ve" component={BookingTicket} />
          <Route path="/kiem-tra-ve" component={CheckTicket} />
          <Route path="/thanh-toan" component={Payment} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
