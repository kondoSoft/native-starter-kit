import type { Action } from '../actions/types';

import { SET_INDEX } from '../actions/search';


const initialState = {

  selectedIndex: undefined,

}

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload
    };
  }
  return state
}
