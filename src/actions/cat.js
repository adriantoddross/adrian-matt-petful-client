import {API_BASE_URL} from '../config.js';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';

export const fetchCatSuccess = animal => ({
  type: FETCH_CAT_SUCCESS,
  animal
});
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
});

export const fetchCat = (animal) => dispatch => {
  dispatch(fetchCatRequest());

  return fetch(`${API_BASE_URL}/api/cat`)
  .then(res => {
    if (!res.ok) {
      throw new Error('Cat not found');
    }
    return res.json(res);
  })
  .then(animal => {dispatch(fetchCatSuccess(animal))})
  .catch(err => {dispatch(fetchCatError(err))});
}


export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS';
export const DELETE_CAT_REQUEST = 'DELETE_CAT_REQUEST';
export const DELETE_CAT_ERROR = 'DELETE_CAT_ERROR';

export const deleteCatSuccess = animal => ({
  type: DELETE_CAT_SUCCESS,
  animal
});
export const deleteCatRequest = () => ({
  type: DELETE_CAT_REQUEST
});
export const deleteCatError = error => ({
  type: DELETE_CAT_ERROR,
  error
});