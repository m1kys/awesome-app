import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import testDataReducer from '../reducers/test-data';
import { loadTestData } from '../actions/test-data-actions';

const middlewares = [
  thunk
];

const rootReducer = combineReducers({
  test: testDataReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f,
  ),
);

store.dispatch(loadTestData());

export default store;
  