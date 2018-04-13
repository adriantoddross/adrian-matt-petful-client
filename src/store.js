import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { catReducer } from './reducers/cat';
import { dogReducer } from './reducers/dog';

export default createStore(
  combineReducers({
    cat: catReducer,
    dog: dogReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);