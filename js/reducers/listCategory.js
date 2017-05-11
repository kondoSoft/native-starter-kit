
import type { Action } from '../actions/types';
import { SET_CATEGORY, PRINT_CLASSIFIEDS } from '../actions/listCategory';
import { PK_ZONE } from '../actions/listZone'


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

  // else if (action.type === PK_ZONE) {
  //   return {
  //     ...state,
  //     results: action.payload
  //   }
  // }

  return state;
}
