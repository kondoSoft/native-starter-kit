
import type { Action } from '../actions/types';
import { SET_INDEX, SET_ZONE } from '../actions/list';

export type State = {
    list: string
}

const initialState = {
  results: [
    // 'Zona Norte',
    // 'Zona Sur',
    {
      "id": 1,
      "name_zone": "Zona Norte",
    },
    {
      "id": 2,
      "name_zone": "Zona Sur",
    },
    {
      "id": 3,
      "name_zone": "Zona Poniente",
    },
    {
      "id": 4,
      "name_zone": "Paseo Montejo",
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
  return state;
}
