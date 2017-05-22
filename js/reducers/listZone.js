
import type { Action } from '../actions/types';
import { SET_ZONE, PRINT_ZONE, PK_ZONE } from '../actions/listZone';
import { PRINT_CLASSIFIEDS, PRINT_CLASSIFIEDS_CATEGORY } from '../actions/listCategory';


export type State = {
    results: string
}

const initialState = {
  results: [
    {
      "id": 1,
      "name_zone": "Zona Norte",
      "state": 1,
      "image": "",
    },
  ],
  selectedZone: undefined,
  selectedPKCategory: [],
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
  else if (action.type == PK_ZONE) {

    return {
      ...state,
      selectedPKCategory: action.payload,
    }
  }
  else if (action.type == PRINT_CLASSIFIEDS) {
    return {
      ...state,
      selectedPKCategory: action.payload.results,
    }
  }
  else if (action.type === PRINT_CLASSIFIEDS_CATEGORY){
    return {
      ...state,
      selectedPKCategory: action.payload.results
    }
  }
  return state;
}
