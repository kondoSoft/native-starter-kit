
import type { Action } from '../actions/types';
import { SET_INDEX, PRINT_CATEGORY } from '../actions/list';

export type State = {
    list: string
}

const initialState = {
  list: [
    // {
    //   "name": 'ZONAS',
    //   "image": 'http://127.0.0.1:8000/media/catzone.png',
    // },
    // {
    //   "name":'GENERALES',
    //   "image": 'http://127.0.0.1:8000/media/catgral.png',
    // },
  ],
    selectedIndex: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload
    };
  }
  else if (action.type === PRINT_CATEGORY) {
    return {
      ...state,
      list: action.payload.results
    }
  }
  return state;
}
