import React, { Component } from 'react'
import { ROLE } from '../common/const'

class RegisterForm extends Component {
  state = {}
  render() {
    return (
      <div className="auth-form-wrapper">
        <div className="container">
          <h1>Đăng kí</h1>
          <form>
            <label className="mt-3 auth-form__label" htmlFor="">
              Tên đăng nhập
            </label>
            <input required type="email" className="find_input" />
            <label className="mt-3 auth-form__label" htmlFor="">
              Mật khẩu
            </label>
            <input required type="password" className="find_input" />
            <label className="mt-3 auth-form__label" htmlFor="">
              Xác nhận mật khẩu
            </label>
            <input required type="password" className="find_input" />
            <label className="mt-3 auth-form__label" htmlFor="">
              Bạn là:
            </label>
            <select
              className="find_input"
              name="role"
              id=""
              defaultValue={ROLE.CLIENT}
            >
              <option value={ROLE.CLIENT}>Khách hàng</option>
              <option value={ROLE.COMPANY}>Nhà xe</option>
            </select>

            <div className="text-center">
              <button className="mt-5 button main_button">Đăng kí</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RegisterForm
