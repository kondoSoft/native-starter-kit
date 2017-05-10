
import type { Action } from '../actions/types';
import { SET_TYPE, PK_CLASSIFIED } from '../actions/listType';

export type State = {
    results: string
}

const initialState = {
  results: [
    
  ],
  selectedType: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_TYPE) {
    return {
      ...state,
      selectedType: action.payload,
    }
  }
  if (action.type === PK_CLASSIFIED) {
    return {
      ...state,
      results: action.payload
    }
  }
  return state;
}
