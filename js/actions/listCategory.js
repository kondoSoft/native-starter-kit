
import type { Action } from './types';

export const SET_CATEGORY = 'SET_CATEGORY';

export function setIndex(index:number):Action {
  console.log(index);
  return {
    type: SET_CATEGORY,
    payload: index,
  };
}

export function fetchCategory(index:number):Action{
  console.log(index);
  return dispatch => {
    return fetch('http://127.0.0.1:8000/classifieds/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(setIndex(res)))
    .catch(err => console.log(err))
  }
}
