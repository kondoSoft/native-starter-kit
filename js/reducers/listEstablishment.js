
import type { Action } from '../actions/types';
import { SET_ESTABLISHMENT, PRINT_ESTABLISHMENT, PRINT_ESTABLISHMENT_CLASSIFIED, PRINT_ESTABLISHMENT_TYPE } from '../actions/listEstablishment';
import { SEARCH_NAME } from '../actions/search';
import { RESET_STATE } from '../actions/list'

import { Dimensions } from 'react-native'

export type State = {
    results: null
}

const initialState = {
  results: [
    {
      "id": '',
     "name": "",
     "description": "",
     "classifieds": [
         ''
     ],
     "type_classifieds": "",
     "zone": '',
     "address": "",
     "coor": {
         "latitudeDelta": '',
         "longitudeDelta": '',
         "latitude": '',
         "longitude": '',
     },
     "horary": "",
     "phone": "",
     "facebook": "",
     "instagram": "",
     "twitter": "",
     "web": "",
     "logo": "",
     "favorites": false,
     "owner": "admin",
     "image": []
    }
  ],
  selectedEstablishment: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_ESTABLISHMENT) {
    return {
      ...state,
      selectedEstablishment: action.payload,
    }
  }
  else if (action.type === PRINT_ESTABLISHMENT) {
    return {
      ...state,
      results: action.payload.results,
    }
  }
  // else if (action.type === PRINT_ESTABLISHMENT_CLASSIFIED) {
  //
  //   return {
  //     ...state,
  //     results: action.payload.results,
  //
  //   }
  // }
  else if (action.type === PRINT_ESTABLISHMENT_TYPE) {
    return {
      ...state,
      results: action.type_id.results
    }
  }
  else if (action.type === SEARCH_NAME) {
    return {
      ...state,
      results: action.payload.results
    }
  }
  else if (action.type === RESET_STATE) {
    return {
      ...state,
      results:[
        {
          "id": '',
         "name": "",
         "description": "",
         "classifieds": [
             ''
         ],
         "type_classifieds": "",
         "zone": '',
         "address": "",
         "coor": {
             "latitudeDelta": '',
             "longitudeDelta": '',
             "latitude": '',
             "longitude": '',
         },
         "horary": "",
         "phone": "",
         "facebook": "",
         "instagram": "",
         "twitter": "",
         "web": "",
         "logo": "",
         "favorites": false,
         "owner": "admin",
         "image": []
        }
      ]
    }
  }

  return state;
}
