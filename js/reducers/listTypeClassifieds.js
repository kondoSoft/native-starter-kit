
import type { Action } from '../actions/types';
import { SET_TYPE } from '../actions/listType';

export type State = {
    results: string
}

const initialState = {
  results: [
    {
      "id": 1,
      "type_classifieds": "Una Estrella",
      "classifieds": 1,
    },
    {
      "id": 2,
      "type_classifieds": "Dos Estrellas",
      "classifieds": 1,
    },
    {
      "id": 3,
      "type_classifieds": "Tres Estrellas",
      "classifieds": 1,
    },
    {
      "id": 4,
      "type_classifieds": "Cuatro Estrellas",
      "classifieds": 1,
    },
    {
      "id": 5,
      "type_classifieds": "Alitas",
      "classifieds": 2,
    },
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
  return state;
}
