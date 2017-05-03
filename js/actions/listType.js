
import type { Action } from './types';

export const SET_TYPE = 'SET_TYPE';
export const PRINT_TYPE ='PRINT_TYPE';

export function setType(index:number):Action {
  return {
    type: SET_TYPE,
    payload: index,
  };
}
export function printType(index:number):Action {
  return {
    type: PRINT_TYPE,
    payload: index,
  };
}


export function fetchTypeClassifieds(index:number):Action{
  return dispatch => {
    return fetch('http://192.168.1.76:8000/type_classifieds/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printType(res)))
    .catch(err => console.log(err))
  }
}
