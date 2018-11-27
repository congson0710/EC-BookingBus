import React, { Component } from 'react'

class LoginForm extends Component {
  state = {}
  render() {
    return (
      <div className="auth-form-wrapper">
        <div className="container">
          <h1>Đăng nhập</h1>
          <form>
            <label className="mt-3 auth-form__label" htmlFor="">Tên đăng nhập</label>
            <input type="text" className="find_input" />
            <label className="mt-3 auth-form__label" htmlFor="">Mật khẩu</label>
            <input type="password" className="find_input" />
            <div className="text-center">
              <button className="button find_button">Đăng nhập</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
