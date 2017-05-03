
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const PRINT_CATEGORY = 'PRINT_CATEGORY';
export const PRINT_ADVERTISING = 'PRINT_ADVERTISING';


export function setIndex(index:number):Action {
  return {
    type: SET_INDEX,
    payload: index,
  };
}
export function printCategory(index:number):Action{
  return {
    type: PRINT_CATEGORY,
    payload: index,
  };
}
export function printAdvertising(index:number):Action{
  return {
    type: PRINT_ADVERTISING,
    payload: index,
  }
}

export function fetchCategory(index:number):Action{
  return dispatch => {
    return fetch('http://127.0.0.1:8000/category/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printCategory(res)))
    .catch(err => console.log(err))
  }
}

export function fetchAdvertising(index:number):Action{
  return dispatch => {
    return fetch('http://127.0.0.1:8000/advertising/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printAdvertising(res)))
    .catch(err => console.log(err))
  }
}
