import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/Register';

import './App.scss';
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/dang-nhap" component={LoginPage} />
          <Route exact path="/dang-ki" component={RegisterPage} />
          <Route exact path="/danh-sach-ve-xe" component={RegisterPage} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
