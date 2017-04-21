
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
      "zone" : 0,
    },
    {
      "id": 2,
      "name_category": "Antros y Bares",
      "image": "../../../assets/img/Zonas/sur.png",
      "zone" : 0,
    },
    {
      "id": 3,
      "name_category": "Restaurantes",
      "image": "../../../assets/img/Zonas/poniente.png",
      "zone" : 2,
    },
    {
      "id": 4,
      "name_category": "Fiestas",
      "image": "../../../assets/img/Zonas/paseo_montejo.png",
      "zone" : 1,
    },
    {
      "id": 5,
      "name_category": "Comida Rapida",
      "image": "../../../assets/img/Zonas/paseo_montejo.png",
      "zone" : 1, 
    },
  ],
  selectedCategory: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      selectedCategory: action.payload,
    };
  }
  return state;
}
