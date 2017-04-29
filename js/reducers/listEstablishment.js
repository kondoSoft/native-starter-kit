
import type { Action } from '../actions/types';
import { SET_ESTABLISHMENT, PRINT_ESTABLISHMENT } from '../actions/listEstablishment';
import { Dimensions } from 'react-native'

export type State = {
    results: string
}

const initialState = {
  results: [

  ],
  selectedEstablishment: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_ESTABLISHMENT) {
    return {
      ...state,
      selectedEstablishment: action.payload,
    };
  }
  if (action.type === PRINT_ESTABLISHMENT) {
    return {
      ...state,
      results: action.payload.results,
    };
  }

  return state;
}
