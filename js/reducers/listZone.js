
import type { Action } from '../actions/types';
import { SET_ZONE } from '../actions/listZone';

export type State = {
    results: string
}

const initialState = {
  results: [
    {
      "id": 1,
      "name_zone": "Zona Norte",
      "state": 1,
      "image": "../../../assets/img/Zonas/norte.png",
    },
    {
      "id": 2,
      "name_zone": "Zona Sur",
      "state": 1,
      "image": "../../../assets/img/Zonas/sur.png",
    },
    {
      "id": 3,
      "name_zone": "Zona Poniente",
      "state": 1,
      "image": "../../../assets/img/Zonas/poniente.png",
    },
    {
      "id": 4,
      "name_zone": "Paseo Montejo",
      "state": 1,
      "image": "../../../assets/img/Zonas/paseo_montejo.png",
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
