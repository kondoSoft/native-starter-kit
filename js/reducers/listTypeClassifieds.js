
import type { Action } from '../actions/types';
import { SET_TYPE, PRINT_TYPE } from '../actions/listType';

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
  if (action.type === PRINT_TYPE) {
    return {
      ...state,
      results: action.payload.results
    }
  }
  return state;
}
