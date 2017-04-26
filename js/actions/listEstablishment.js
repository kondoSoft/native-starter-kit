
import type { Action } from './types';

export const SET_ESTABLISHMENT = 'SET_ESTABLISHMENT';

export function setEstablishment(index:number):Action {
  return {
    type: SET_ESTABLISHMENT,
    payload: index,
  };
}

export function fetchCategory(index:number):Action{
  console.log(index);
  return dispatch => {
    return fetch('http://127.0.0.1:8000/establishment/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(setEstablishment(res)))
    .catch(err => console.log(err))
  }
}
