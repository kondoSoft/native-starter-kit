
import type { Action } from '../actions/types';
import { SET_CATEGORY } from '../actions/listCategory';

export type State = {
    results: string
}

const initialState = {
  results: [
    {
      "id": 1,
      "name_category": "Hoteles",
      "image": "../../../assets/img/Zonas/norte.png",
    },
    {
      "id": 2,
      "name_category": "Antros y Bares",
      "image": "../../../assets/img/Zonas/sur.png",
    },
    {
      "id": 3,
      "name_category": "Restaurantes",
      "image": "../../../assets/img/Zonas/poniente.png",
    },
    {
      "id": 4,
      "name_category": "Fiestas",
      "image": "../../../assets/img/Zonas/paseo_montejo.png",
    },
    {
      "id": 5,
      "name_category": "Comida Rapida",
      "image": "../../../assets/img/Zonas/paseo_montejo.png",
    },
  ],
  selectedCategory: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      selectedZone: action.payload,
    };
  }
  return state;
}
