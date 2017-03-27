
import type { Action } from './types';

export const SET_ZONE = 'SET_ZONE';

export function setZone(index:number):Action {
  return {
    type: SET_ZONE,
    payload: index,
  };
}
