
import type { Action } from './types';

export const SET_TYPE = 'SET_TYPE';
export const PRINT_TYPE ='PRINT_TYPE';
export const PK_CLASSIFIED ='PK_CLASSIFIED';


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
export function pk_classified(pk){
  return {
    type: PK_CLASSIFIED,
    payload: pk,
  }
}



export function fetchTypeClassifieds(index:number):Action{
  return dispatch => {
    return fetch('http://127.0.0.1:8000/type_classifieds/',{
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

export function fetchPKClassifieds(index:number):Action{
  return dispatch => {
    return fetch('http://127.0.0.1:8000/typeclassifieds_classifieds/?classifieds_id=' + index,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(pk_classified(res)))
    .catch(err => console.log(err))
  }
}
