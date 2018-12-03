import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import flow from 'lodash/fp/flow';
import { connect } from 'react-redux';

import inputField from './inputField';
import { searchingThunkCreator } from '../../redux/actions/bookingAction';

const FORM_NAME = 'EcBooking/SearchForm';

const PureSearchForm = ({ handleSubmit }) => (
  <div className="find">
    <div className="container">
      <h1 className="find_title text-center">Tìm vé xe</h1>
      <div className="find_form_container">
        <form
          className="find_form d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-between justify-content-start flex-wrap"
          onSubmit={handleSubmit}
        >
          <Field
            name="sourcePos"
            component={inputField}
            label="Điểm đi"
            inputClassName="destination find_input"
            required
            placeholder="Nhập nơi đi"
            type="text"
          />
          <Field
            name="destinationPos"
            component={inputField}
            label="Điểm đến"
            inputClassName="destination find_input"
            required
            placeholder="Nhập nơi đến"
            type="text"
          />
          <Field
            name="destinationPos"
            component={inputField}
            label="Điểm đến"
            inputClassName="destination find_input unstyled"
            required
            placeholder="Chọn ngày đi"
            type="date"
          />
          <button className="button find_button">Tìm kiếm</button>
        </form>
      </div>
    </div>
  </div>
);

const connnectToRedux = connect(
  null,
  dispatch => ({
    onSearchRequest: flow(
      searchingThunkCreator,
      dispatch
    )
  })
);

const prepareProps = mapProps(
  ({ onSearchRequest, history, ...otherProps }) => ({
    onSubmit: data => {
      onSearchRequest(data);
      history.push('danh-sach-ve-xe');
    },
    ...otherProps
  })
);

const withReduxForm = reduxForm({ form: FORM_NAME });

const enhance = compose(
  withRouter,
  connnectToRedux,
  prepareProps,
  withReduxForm
);

export default enhance(PureSearchForm);