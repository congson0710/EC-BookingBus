import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import flow from 'lodash/fp/flow';
import { connect } from 'react-redux';
import moment from 'moment';

import StartPlaceField from './StartPlaceField';
import EndPlaceField from './EndPlaceField';
import inputField from './inputField';
import {
  reFetchPlaceThunkCreator,
  searchTicketThunkCreator
} from '../../redux/actions/searchingAction';

const FORM_NAME = 'EcBooking/SearchForm';

const PureSearchForm = ({ handleSubmit, initOptions, reFetchListPlace }) => (
  <div className="find">
    <div className="container">
      <h1 className="find_title text-center">Tìm vé xe</h1>
      <div className="find_form_container">
        <form
          className="find_form d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-between justify-content-start flex-wrap"
          onSubmit={handleSubmit}
        >
          <Field
            name="startPlace"
            component={StartPlaceField}
            label="Điểm đi"
            className="destination find_input"
            required
            defaultValue={-1}
            defaultLabel="Chọn điểm đi"
            onChange={(_, value, previousValue, name) => {
              reFetchListPlace({
                filteredListPlace: { placeID: value },
                nameField: name
              });
            }}
          />
          <Field
            name="endPlace"
            component={EndPlaceField}
            label="Điểm đến"
            className="destination find_input"
            required
            defaultValue={-1}
            defaultLabel="Chọn điểm đến"
            onChange={(_, value, previousValue, name) => {
              reFetchListPlace({
                filteredListPlace: { placeID: value },
                nameField: name
              });
            }}
          />
          <Field
            name="startDay"
            component={inputField}
            label="Ngày đi"
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
      searchTicketThunkCreator,
      dispatch
    ),
    reFetchListPlace: flow(
      reFetchPlaceThunkCreator,
      dispatch
    )
  })
);

const prepareProps = mapProps(
  ({ onSearchRequest, history, ...otherProps }) => ({
    onSubmit: data => {
      const newData = {
        ...data,
        startDay: moment(new Date(data.startDay)).format('L')
      };
      onSearchRequest(newData);
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
