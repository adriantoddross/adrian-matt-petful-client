import { FETCH_DOG_SUCCESS, FETCH_DOG_REQUEST, FETCH_DOG_ERROR } from '../actions/index';

const initialState = {
  animal: null, 
  error: null, 
  loading: false
};

export function dogReducer(state=initialState, action) {
  if (action.type === FETCH_DOG_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null });
  }
  if (action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.error });
  }
  if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, { loading: false, error: null, animal: action.animal});
  } return state;
}
