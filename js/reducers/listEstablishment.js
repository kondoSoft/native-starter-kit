
import type { Action } from '../actions/types';
import { SET_ESTABLISHMENT } from '../actions/listEstablishment';
import { Dimensions } from 'react-native'

export type State = {
    results: string
}
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0053;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialState = {
  results: [
    {
      "id": 1,
      "name": "Hotel Viva",
      "description": "lorem ipsum sunt in culpa qui officia deserunt mollit anim id est laborum." ,
      "classifieds": 0,
      "type_classifieds": "Cuatro Estrellas",
      "zone": "Zona Norte",
      "address" : "Av. Ruiz Cortinez S/N",
      "coordinate": {
        "longitude": -92.940639,
        "latitude": 17.996576,
        "latitudeDelta": LATITUDE_DELTA,
        "longitudeDelta": LONGITUDE_DELTA,
      },
      "horary": "24 hrs",
      "phone": " 01 800 711 5555 ",
      "facebook": "https://www.facebook.com/",
      "instagram": "https://www.instagram.com/",
      "twitter": "https://www.twitter.com/",
      "logo": "",
      "favorites": 4,
      "gallery": "",
    },
    {
      "id": 2,
      "name": "Wings Army Tabasco 2000",
      "description": "lorem ipsum sunt in culpa qui officia deserunt mollit anim id est laborum." ,
      "classifieds": 3,
      "type_classifieds": "Alitas",
      "zone": "Zona Norte",
      "address" : "Av. Ruiz Cortinez S/N",
      "coordinate": {
        "longitude": -92.942216,
        "latitude": 17.997007,
        "latitudeDelta": LATITUDE_DELTA,
        "longitudeDelta": LONGITUDE_DELTA,
      },
      "horary": "09:00 - 22:00 ",
      "phone": "01 993 316 2107",
      "facebook": "https://www.facebook.com/",
      "instagram": "https://www.instagram.com/",
      "twitter": "https://www.twitter.com/",
      "logo": "",
      "favorites": 0,
      "gallery": "",
    },

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
  return state;
}
