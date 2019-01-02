import React, { Component } from 'react';
import { notification } from 'antd';
import { Link } from 'react-router-dom';
import axios, { setToken } from '../../../axios';
import { history } from '../../../redux/index';
import Auth from '../../../lib/auth';
import { ROLE } from '../../../common/const';

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this._checkLogin();
  }

  _checkLogin() {
    if (Auth.getUserRole() === ROLE.COMPANY) {
      history.replace('/admin/tra-cuu-thong-tin');
    }
  }

  _handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  _handleLogin = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      const { data } = await axios.post('/api/login-admin', {
        username,
        password
      });
      setToken(data.token);
      localStorage.setItem('role', data.currentUser.roleID);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.currentUser));
      notification.success({
        message: data.message,
        description: '',
        duration: 2
      });
      history.push('/admin/tra-cuu-thong-tin');
    } catch (error) {
      notification.error({
        message: 'Login fail',
        description: error.response.data.message,
        duration: 2
      });
    }
  };
  render() {
    return (
      <div>
        <h2 className="text-center mt-5">Đăng nhập</h2>
        <form
          style={{ margin: '0 auto', maxWidth: '400px' }}
          onSubmit={this._handleLogin}
        >
          <label>Tên đăng nhập</label>
          <input
            onChange={this._handleChange}
            className="form-control"
            type="email"
            name="username"
          />

          <label className="mt-3">Mật khẩu</label>
          <input
            onChange={this._handleChange}
            className="form-control"
            type="password"
            name="password"
          />

          <button className="btn btn-primary mt-3 mx-auto d-block">
            Đăng nhập
          </button>
        </form>
        <div className="text-center mt-5">
          <Link to="/">Về trang chủ</Link>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
