
import type { Action } from './types';

export const SET_ZONE = 'SET_ZONE';
export const PRINT_ZONE = 'PRINT_ZONE';
export const PK_ZONE = 'PK_ZONE';
export const LOADING = 'LOADING';


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

export function pk_zone(id){
  return {
    type: PK_ZONE,
    payload: id,
  }
}

export function fetchZone(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/category_zone/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => {
      dispatch(printZone(res))
      setTimeout(()=>{
        dispatch(setLoading())
      }, 2000)
    })
    .catch(err => console.log(err))
  }
}

export function fetchPkZone(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/zone_establishment/?zone_id=' + index,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(pk_zone(res)))
    .catch(err => console.log(err))
  }
}

export function setLoading(){
  return {
    type: LOADING,
  }
}
