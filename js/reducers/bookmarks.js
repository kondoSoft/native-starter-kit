
import type { Action } from '../actions/bookmarks';
import { ADD_BOOKMARK, REMOVE_BOOKMARK }from '../actions/bookmarks'
//
// export type State = {
//     drawerState: string,
//     drawerDisabled: boolean
// }

const initialState = {
    space:[
      {
      "id": '01',
      "name": "Nombre del negocio",
      "description": "Descrippcion del negocio",
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
      }
    },
    {
    "id": '02',
    "name": "Nombre del negocio 2",
    "description": "Descrippcion del negocio",
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
    }
  }
    ]
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === ADD_BOOKMARK) {
    console.log(' I want to add a bookmarks');
    return
    // return {
    //   ...state,
    //   drawerState: 'opened',
    // };
  }

  if (action.type === REMOVE_BOOKMARK) {
    console.log('I want to remove a bookmark');
    return
    // return {
    //   ...state,
    //   drawerState: 'closed',
    // };
  }

  return state;
}
