import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import lifecycle from 'recompose/lifecycle';
import flow from 'lodash/fp/flow';
import { connect } from 'react-redux';

import inputField from './inputField';
import selectField from './selectField';
import { searchingThunkCreator } from '../../redux/actions/bookingAction';
import { fetchListPlaceThunkCreator } from '../../redux/actions/searchingAction';
import { fetchListPlaceDataSelector } from '../../redux/selectors/searchingSelectors';

const FORM_NAME = 'EcBooking/SearchForm';

const PureSearchForm = ({ handleSubmit, listPlace }) => (
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
            component={selectField}
            label="Điểm đi"
            className="destination find_input"
            required
            defaultValue={-1}
            defaultLabel="Chọn điểm đi"
            options={listPlace}
            onChange={(_, value) => {
              const filteredPlaceList = listPlace.filter(
                place => place.placeID.toString() !== value
              );
            }}
          />
          <Field
            name="destinationPos"
            component={selectField}
            label="Điểm đến"
            className="destination find_input"
            required
            defaultValue={-1}
            defaultLabel="Chọn điểm đến"
            options={listPlace}
            onChange={(_, value) => {
              const filteredPlaceList = listPlace.filter(
                place => place.placeID.toString() !== value
              );
            }}
          />
          <Field
            name="destinationPos"
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
  state => ({
    listPlace: fetchListPlaceDataSelector(state)
  }),
  dispatch => ({
    onSearchRequest: flow(
      searchingThunkCreator,
      dispatch
    ),
    fetchListPlace: flow(
      fetchListPlaceThunkCreator,
      dispatch
    )
  })
);

const withLifeCycleHOC = lifecycle({
  componentDidMount() {
    this.props.fetchListPlace();
  }
});

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
  withLifeCycleHOC,
  withReduxForm
);

export default enhance(PureSearchForm);
