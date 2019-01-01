import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import {createBrowserHistory} from 'history';
import {rootReducer} from './rootReducer';

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(reduxThunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export const history = createBrowserHistory();
