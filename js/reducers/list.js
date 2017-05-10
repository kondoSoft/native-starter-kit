
import type { Action } from '../actions/types';
import { SET_INDEX, PRINT_CATEGORY, PRINT_ADVERTISING } from '../actions/list';

export type State = {
    list: string
}

const initialState = {
  list: [
    {
      'id': 0,
      'category_name': 'ZONAS',
      'image': '',
    }
  ],
  advertising: [ {
    'image': ''
    }
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
  else if (action.type === PRINT_ADVERTISING) {
    return {
      ...state,
      advertising: action.payload.results
    }
  }
  return state;
}
