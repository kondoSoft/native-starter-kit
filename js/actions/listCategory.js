
import type { Action } from './types';

export const SET_CATEGORY = 'SET_CATEGORY';
export const PRINT_CLASSIFIEDS = 'PRINT_CLASSIFIEDS';


export function setIndex(index:number):Action {
  return {
    type: SET_CATEGORY,
    payload: index,
  };
}

export function printClassifieds(index:number):Action {
  return {
    type: PRINT_CLASSIFIEDS,
    payload: index,
  };
}


export function fetchClassifieds(index:number):Action{
  return dispatch => {
    return fetch('http://192.168.1.76:8000/classifieds/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printClassifieds(res)))
    .catch(err => console.log(err))
  }
}
