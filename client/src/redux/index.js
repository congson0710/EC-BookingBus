import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const initialState = {
  testState: 'test'
};

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
