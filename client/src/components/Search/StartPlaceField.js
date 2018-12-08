import React from 'react';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import flow from 'lodash/fp/flow';
import { connect } from 'react-redux';

import SelectField from './selectField';
import { fetchStartListPlaceThunkCreator } from '../../redux/actions/searchingAction';
import { fetchStartListPlaceDataSelector } from '../../redux/selectors/searchingSelectors';

const PureStartPlaceField = ({ options, ...otherProps }) => (
  <SelectField {...otherProps} options={options} />
);

const withLifeCycleHOC = lifecycle({
  componentDidMount() {
    this.props.fetchStartListPlace();
  }
});

const connectToRedux = connect(
  state => ({
    options: fetchStartListPlaceDataSelector(state)
  }),
  dispatch => ({
    fetchStartListPlace: flow(
      fetchStartListPlaceThunkCreator,
      dispatch
    )
  })
);

const enhance = compose(
  connectToRedux,
  withLifeCycleHOC
);

export default enhance(PureStartPlaceField);
