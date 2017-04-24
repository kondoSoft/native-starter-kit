
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
      "logo": "../../../assets/img/Zonas/norte.png",
      "tags": "",
      "zone" : 0,
    },
    {
      "id": 2,
      "name_category": "Antros y Bares",
      "logo": "../../../assets/img/Zonas/sur.png",
      "tags": "",
      "zone" : 0,
    },
    {
      "id": 3,
      "name_category": "Restaurantes",
      "logo": "../../../assets/img/Zonas/poniente.png",
      "tags": "",
      "zone" : 2,
    },
    {
      "id": 4,
      "name_category": "Fiestas",
      "logo": "../../../assets/img/Zonas/paseo_montejo.png",
      "tags": "",
      "zone" : 1,
    },
    {
      "id": 5,
      "name_category": "Comida Rapida",
      "logo": "../../../assets/img/Zonas/paseo_montejo.png",
      "tags": "",
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
