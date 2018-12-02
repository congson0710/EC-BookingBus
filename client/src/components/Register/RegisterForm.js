import React, { Fragment } from 'react';
import { Field } from 'redux-form';

import inputField from './inputFields';
import selectField from './selectFields';
import { ROLE } from '../../common/const';

const DEFAULT_CLASS_NAME = 'find_input';

const PureRegisterForm = ({ handleSubmit }) => (
  <Fragment>
    <h1>Đăng kí</h1>
    <div>
      <Field
        name="userName"
        component={inputField}
        label="Tên đăng nhập"
        className={DEFAULT_CLASS_NAME}
        type="input"
      />
      <Field
        name="password"
        component={inputField}
        label="Mật khẩu"
        className={DEFAULT_CLASS_NAME}
        type="password"
        required
      />
      <Field
        name="reTypePassword"
        component={inputField}
        label="Xác nhận mật khẩu"
        className={DEFAULT_CLASS_NAME}
        type="password"
        required
      />
      <Field
        name="phone"
        component={inputField}
        label="Số điện thoại"
        className={DEFAULT_CLASS_NAME}
        required
      />
      <Field
        name="lastName"
        component={inputField}
        label="Họ"
        className={DEFAULT_CLASS_NAME}
        required
      />
      <Field
        name="firstName"
        component={inputField}
        label="Tên"
        className={DEFAULT_CLASS_NAME}
        required
      />
      <label className="mt-3 auth-form__label" htmlFor="">
        Bạn là:
      </label>
      <Field
        name="userRole"
        component={selectField}
        className={DEFAULT_CLASS_NAME}
        role={ROLE}
      />
      <div className="text-center">
        <button className="mt-5 button main_button" onClick={handleSubmit}>
          Đăng kí
        </button>
      </div>
    </div>
  </Fragment>
);

export default PureRegisterForm;
