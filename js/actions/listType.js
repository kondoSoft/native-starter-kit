
import type { Action } from './types';

export const SET_TYPE = 'SET_TYPE';

export function setType(index:number):Action {
  return {
    type: SET_TYPE,
    payload: index,
  };
}
