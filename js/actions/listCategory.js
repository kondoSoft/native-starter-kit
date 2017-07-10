
import type { Action } from './types';


export const SET_CATEGORY = 'SET_CATEGORY';
export const PRINT_CLASSIFIEDS = 'PRINT_CLASSIFIEDS';
export const PRINT_CLASSIFIEDS_CATEGORY = 'PRINT_CLASSIFIEDS_CATEGORY';

export function setIndex(index:number):Action {
  return {
    type: SET_CATEGORY,
    payload: index,
  };
}

export function printClassifieds(index:number, page:number):Action {
  return {
    type: PRINT_CLASSIFIEDS,
    payload: index,
  };
}
export function printClassifiedsCategory(index:number, page:number ):Action {
  return {
    type: PRINT_CLASSIFIEDS_CATEGORY,
    payload: index,
    page: page
  };
}

export function fetchClassifieds(index:number):Action{
  return dispatch => {
    return fetch('http://138.68.2.137:8080/classifieds/',{
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

export function fetchClassifiedsCategory(index:number, page:number):Action{

  return dispatch => {
    return fetch('http://138.68.2.137:8080/classifieds/?category_id=' + index + '&page=' + page,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => {
      if(res.next != null) {
        dispatch(fetchClassifiedsCategory(index, page+1))
      }
      if (res.results[0].category == 1) {
        dispatch(printClassifiedsCategory(res))
      }else{
        dispatch(printClassifieds(res))
      }
      // console.log('Response Category',res.results[0].category);
    })
    .catch(err => console.log(err))
  }
}
