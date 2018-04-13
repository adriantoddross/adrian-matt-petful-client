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


export const DELETE_DOG_SUCCESS = 'DELETE_DOG_SUCCESS';
export const DELETE_DOG_REQUEST = 'DELETE_DOG_REQUEST';
export const DELETE_DOG_ERROR = 'DELETE_DOG_ERROR';

export const deleteDogSuccess = animal => ({
  type: DELETE_DOG_SUCCESS,
  animal
});
export const deleteDogRequest = () => ({
  type: DELETE_DOG_REQUEST
});
export const deleteDogError = error => ({
  type: DELETE_DOG_ERROR,
  error
});

export const deleteDog = () => dispatch => {
  dispatch(deleteDogRequest());
  return fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE',
  })
  .then(res => {
    console.log(res);
    // return res.json(res);
  })
  .then( () => {dispatch(deleteDogSuccess())})
  .then(() => {dispatch(fetchDog())})
  .catch(err => {dispatch(deleteDogError(err))});
}