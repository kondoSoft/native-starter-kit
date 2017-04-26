
import type { Action } from './types';

export const SET_ZONE = 'SET_ZONE';
export const PRINT_ZONE = 'PRINT_ZONE';


export function setZone(index:number):Action {
  return {
    type: SET_ZONE,
    payload: index,
  };
}

export function printZone(res){
  return {
    type: PRINT_ZONE,
    payload: res,
  }
}

export function fetchZone(index:number):Action{
  // console.log(index);
  return dispatch => {
    return fetch('http://127.0.0.1:8000/category_zone/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printZone(res)))
    .catch(err => console.log(err))
  }
}
