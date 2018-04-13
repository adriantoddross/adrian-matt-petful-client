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
export const fetchCatError = () => ({
  type: FETCH_CAT_ERROR
});

export function fetchCat(animal) {
  dispatch(fetchCatRequest())
  .then(fetch(`${API_BASE_URL}/api/cat`))
  .then(res => {
    if (!res.ok) {
      throw new Error('Cat not found');
    } 
    return res.json();
  })
  .then(animal => {dispatch(fetchCatSuccess(animal))})
  .catch(err => {dispatch(fetchCatError(err))});
}

