
import type { Action } from './types';

export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';


export function add_bookmark(index:number):Action {
  return {
    type: ADD_BOOKMARK,
    payload: index,
  };
}
export function remove_bookmark(index:number):Action {
  return {
    type: REMOVE_BOOKMARK ,
    payload: index,
  }
}
