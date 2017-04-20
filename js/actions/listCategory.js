
import type { Action } from './types';

export const SET_CATEGORY = 'SET_CATEGORY';

export function setIndex(index:number):Action {
  return {
    type: SET_CATEGORY,
    payload: index,
  };
}
