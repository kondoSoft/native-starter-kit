
import type { Action } from './types';

export const SET_ESTABLISHMENT = 'SET_ESTABLISHMENT';
export const PRINT_ESTABLISHMENT = 'PRINT_ESTABLISHMENT';
export const PRINT_ESTABLISHMENT_TYPE = 'PRINT_ESTABLISHMENT_TYPE';


export function setEstablishment(index:number):Action {
  return {
    type: SET_ESTABLISHMENT,
    payload: index,
  };
}
export function printEstablishment(index:number):Action {
  return {
    type: PRINT_ESTABLISHMENT,
    payload: index,
  }
}
export function printEstablishmentType(type_id:number, zone_id:number):Action{

  return{
    type: PRINT_ESTABLISHMENT_TYPE,
    type_id: type_id,
    zone_id: zone_id,
  }
}

export function fetchEstablishmentTypeG(type_id:number, zone_id:number):Action{

  return dispatch => {
    return fetch('http://138.68.2.137/establishment/?type_id=' + type_id + '&zone_id=' + zone_id,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printEstablishmentType(res)))
    .catch(err => console.log(err))
  }
}
export function fetchEstablishmentType(type_id:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137/establishment/?type_id=' + type_id,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printEstablishment(res)))
    .catch(err => console.log(err))
  }
}
