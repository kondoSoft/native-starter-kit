
import type { Action } from '../actions/types';
import { SET_ZONE, PRINT_ZONE } from '../actions/listZone';

export type State = {
    results: string
}

const initialState = {
  results: [
    {
      "id": 1,
      "name_zone": "Zona Norte",
      "state": 1,
      "image": "http://127.0.0.1:8000/category_zone/norte_CrBLvNe.png",
    },
  ],
  selectedZone: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_ZONE) {
    return {
      ...state,
      selectedZone: action.payload,
    };
  }
  else if (action.type === PRINT_ZONE) {
    return {
      ...state,
      results: action.payload.results
    }
  }
  return state;
}
