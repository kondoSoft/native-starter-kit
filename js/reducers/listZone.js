
import type { Action } from '../actions/types';
import { SET_ZONE, PRINT_ZONE, PK_ZONE, LOADING } from '../actions/listZone';
import { PRINT_CLASSIFIEDS, PRINT_CLASSIFIEDS_CATEGORY, NEXT_PAGE } from '../actions/listCategory';
import {RESET_STATE, RESET_STATE_BACK} from '../actions/list'
// import {  } from '../actions/list'


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
  nextPage:  null,
  previousPage:  null,
  count: 0,
  loading: false,
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
      results: action.payload.results,
    }
  }
  else if (action.type === LOADING) {
    return {
      ...state,
      loading: !state.loading
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
      selectedPKCategory: [...state.selectedPKCategory, action.payload.results],
      nextPage: action.payload.next,
      previousPage: action.payload.previous,
      count: action.payload.count
    }
  }
  else if (action.type === RESET_STATE) {
    return {
      ...state,
      selectedPKCategory: [],
      results: []
    }
  }
  else if(action.type === RESET_STATE_BACK){
    return{
      ...state,
      selectedPKCategory: [],
      results: []
    }
  }
  return state;
}
