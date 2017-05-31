
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const PRINT_CATEGORY = 'PRINT_CATEGORY';
export const PRINT_ADVERTISING = 'PRINT_ADVERTISING';
export const PRINT_VIDEO = 'PRINT_VIDEO';
export const SUCCESS_MAIL  = 'SUCCESS_MAIL';
export const LOADING_TRUE = 'LOADING_TRUE';
export const RESET_STATE = 'RESET_STATE';
export const RESET_STATE_BACK = 'RESET_STATE_BACK'

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
    return fetch('http://138.68.2.137/category/',{
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
    return fetch('http://138.68.2.137/advertising/',{
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

export function fetchVideo(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137/videourl/',{
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
    return fetch('http://138.68.2.137/contact_email/',{
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
