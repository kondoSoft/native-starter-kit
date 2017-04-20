
import type { Action } from './types';

export const SET_ESTABLISHMENT = 'SET_ESTABLISHMENT';

export function setEstablishment(index:number):Action {
  return {
    type: SET_ESTABLISHMENT,
    payload: index,
  };
}
