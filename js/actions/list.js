
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const PRINT_CATEGORY = 'PRINT_CATEGORY';
export const PRINT_ADVERTISING = 'PRINT_ADVERTISING';
export const PRINT_VIDEO = 'PRINT_VIDEO';
export const SUCCESS_MAIL  = 'SUCCESS_MAIL';
export const LOADING_TRUE = 'LOADING_TRUE';
export const RESET_STATE = 'RESET_STATE';
export const RESET_STATE_BACK = 'RESET_STATE_BACK'
export const PRINT_ADVERTISING_ZONE = 'PRINT_ADVERTISING_ZONE'
export const PRINT_ADVERTISING_CATEGORY = 'PRINT_ADVERTISING_CATEGORY'
export const PRINT_ADVERTISING_SUBCATEGORY = 'PRINT_ADVERTISING_SUBCATEGORY'



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
export function printAdvertising(index):Action{
  return {
    type: PRINT_ADVERTISING,
    payload: index,
  }
}
export function printAdvertisingZone(index):Action{
  return {
    type: PRINT_ADVERTISING_ZONE,
    payload: index,
  }
}
export function printAdvertisingCategory(index):Action{
  return {
    type: PRINT_ADVERTISING_CATEGORY,
    payload: index,
  }
}
export function printAdvertisingSubcategory(index):Action{
  return {
    type: PRINT_ADVERTISING_SUBCATEGORY,
    payload: index,
  }
}
export function printVideo(index:number):Action{
  return {
    type: PRINT_VIDEO,
    payload: index,
  }
}
export function successMail(message):Action{
  return {
    type: SUCCESS_MAIL,
    payload: message,
  }
}

export function fetchCategory(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/category/',{
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
// Advertising
export function fetchAdvertising(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/advertising/',{
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
export function fetchAdvertisingZone(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/advertising_zone/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printAdvertisingZone(res)))
    .catch(err => console.log(err))
  }
}
export function fetchAdvertisingCategory(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/advertising_category/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printAdvertisingCategory(res)))
    .catch(err => console.log(err))
  }
}
export function fetchAdvertisingSubcategory(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/advertising_subcategory/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printAdvertisingSubcategory(res)))
    .catch(err => console.log(err))
  }
}
// End Advertising
export function fetchVideo(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/videourl/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(printVideo(res)))
    .catch(err => console.log(err))
  }
}

export function sendMail(name, phone, email):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/contact_email/',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
      })
    })
    .then(res => {return res.json()})
    .then(res => dispatch(successMail(res)))
    .catch(err => console.log(err))
  }
}

export function setLoadingTrue(){
  return {
    type: LOADING_TRUE,
    payload: true,
  }
}

export function resetState(){
  return {
    type: RESET_STATE,
  }
}
export function resetStateBack(){
  return {
    type: RESET_STATE_BACK,
  }
}
