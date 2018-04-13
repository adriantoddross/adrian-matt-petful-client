import {API_BASE_URL} from '../config.js';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';

export const fetchDogSuccess = animal => ({
  type: FETCH_DOG_SUCCESS,
  animal
});
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});
export const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error
});

export const fetchDog = (animal) => dispatch => {
  dispatch(fetchDogRequest());

  return fetch(`${API_BASE_URL}/api/dog`)
  .then(res => {
    if (!res.ok) {
      throw new Error('Dog not found');
    } 
    return res.json(res);
  })
  .then(animal => {dispatch(fetchDogSuccess(animal))})
  .catch(err => {dispatch(fetchDogError(err))});
}