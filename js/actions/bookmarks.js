
import type { Action } from './types';

export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const SET_ITEM = 'SET_ITEM';

export function add_bookmark(index):Action {
  return {
    type: ADD_BOOKMARK,
    payload: index,
  };
}
export function remove_bookmark(index):Action {
  return {
    type: REMOVE_BOOKMARK ,
    payload: index,
  }
}

export function set_item(index):Action {
  return{
    type: SET_ITEM,
    payload: index,
  }
}
