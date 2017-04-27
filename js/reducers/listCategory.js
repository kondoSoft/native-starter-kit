
import type { Action } from '../actions/types';
import { SET_CATEGORY, PRINT_CLASSIFIEDS } from '../actions/listCategory';

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
  else if (action.type === PRINT_CLASSIFIEDS) {
    console.log("me estoy ejecutando");
    console.log(action.payload.results);
    return {
      ...state,
      results: action.payload.results
    }

  }
  return state;
}
