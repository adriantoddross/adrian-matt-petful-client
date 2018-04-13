import { FETCH_CAT_SUCCESS, FETCH_CAT_REQUEST, FETCH_CAT_ERROR } from '../actions/cat';

const initialState = {
  animal: null, 
  error: null, 
  loading: false
};

export function catReducer(state=initialState, action) {
  if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null });
  }
  if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.error });
  }
  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, { loading: false, error: null, animal: action.animal});
  } return state;
}
