
import type { Action } from '../actions/types';
import { SET_CATEGORY } from '../actions/listCategory';
// import { PK_ZONE } from '../actions/listZone'
import { RESET_STATE } from '../actions/listZone'



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
  }else if (action.type === RESET_STATE) {
    return {
      ...state,
      initialState
    }
  }
  return state;
}
