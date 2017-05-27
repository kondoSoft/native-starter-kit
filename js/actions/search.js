import type { Action } from './types';

export const SEARCH_NAME = "SEARCH_NAME";
export const SET_INDEX = 'SET_INDEX';

export function searchName(search:string, name: string):Action {
  console.log(' i am searchName and this is name: ', name);
  return {
    type: SEARCH_NAME,
    payload: search,
    name,
  };
}

export function setIndex(index:number):Action {
  return {
    type: SET_INDEX,
    payload: index,
  };
}
export function fetchSearch(name:string):Action{
  var name= name
  return dispatch => {
    return fetch('http://138.68.2.137/search/?search=' + name,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => dispatch(searchName(res, name)))
    .catch(err => console.log(err))
  }
}
