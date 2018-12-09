import React from 'react';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import flow from 'lodash/fp/flow';
import { connect } from 'react-redux';

import SelectField from './selectField';
import { fetchEndListPlaceThunkCreator } from '../../redux/actions/searchingAction';
import { fetchEndListPlaceDataSelector } from '../../redux/selectors/searchingSelectors';

const PureEndPlaceField = ({ options, ...otherProps }) => (
  <SelectField {...otherProps} options={options} />
);

const withLifeCycleHOC = lifecycle({
  componentDidMount() {
    this.props.fetchEndListPlace();
  }
});

const connectToRedux = connect(
  state => ({
    options: fetchEndListPlaceDataSelector(state)
  }),
  dispatch => ({
    fetchEndListPlace: flow(
      fetchEndListPlaceThunkCreator,
      dispatch
    )
  })
);

const enhance = compose(
  connectToRedux,
  withLifeCycleHOC
);

export default enhance(PureEndPlaceField);
