
import type { Action } from '../actions/types';
import { SET_CATEGORY } from '../actions/listCategory';

export type State = {
    results: string
}

const initialState = {
  results: [
    
  ],
  selectedCategory: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      selectedCategory: action.payload,
    };
  }
  return state;
}
