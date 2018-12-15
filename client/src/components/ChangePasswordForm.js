import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePassword } from '../redux/actions/userAction';
import { notification } from 'antd';

function mapDispatchToProps(dispatch) {
  return {
    updatePassword: ({ oldPassword, newPassword }) =>
      dispatch(updatePassword({ oldPassword, newPassword }))
  };
}

class EditProfileForm extends Component {
  state = {
    info: {
      password: '',
      newPassword: '',
      retypePassword: ''
    }
  };
  _handleReset = e => {
    e.preventDefault();
    this.setState({
      info: {
        password: '',
        newPassword: '',
        retypePassword: ''
      }
    });
  };

  _validate = () => {
    try {
      const { newPassword, retypePassword } = this.state.info;
      if (newPassword.length < 6) {
        throw new Error('Password must have at least 6 characters.')
      }
      if (newPassword !== retypePassword) {
        throw new Error('Password does not match the confirm password.')
      }
      return true;
    } catch (error) {
      notification.error({
        message: error.message,
        duration: 3
      });
      return false;
    }
  };
  _handleChangePassword = e => {
    e.preventDefault();
    const isValidate = this._validate();
    if (isValidate) {
      const { password, newPassword } = this.state.info;
      this.props.updatePassword({ oldPassword: password, newPassword });
    }
  };
  _handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(prevState => ({
      info: {
        ...prevState.info,
        [name]: value
      }
    }));
  };
  render() {
    const { info } = this.state;

    return (
      <form
        onSubmit={this._handleChangePassword}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <label className="mt-3 auth-form__label">Mật khẩu cũ</label>
        <input
          value={info.password}
          type="password"
          name="password"
          className="find_input"
          onChange={this._handleInputChange}
          required
        />
        <label className="mt-3 auth-form__label">Mật khẩu mới</label>
        <input
          value={info.newPassword}
          name="newPassword"
          type="password"
          className="find_input"
          onChange={this._handleInputChange}
          required
        />
        <label className="mt-3 auth-form__label">Nhập lại mật khẩu mới</label>
        <input
          value={info.retypePassword}
          name="retypePassword"
          type="password"
          className="find_input"
          onChange={this._handleInputChange}
          required
        />
        <div className="text-center">
          <button className="mt-4 main_button">Đổi mật khẩu</button>
          <button
            className="mt-4 ml-2 main_button main_button-secondary"
            onClick={this._handleReset}
          >
            Hủy
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(EditProfileForm);
