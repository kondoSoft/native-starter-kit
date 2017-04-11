
import type { Action } from '../actions/types';
import { SET_INDEX, SET_ZONE } from '../actions/list';

export type State = {
    list: string
}

const initialState = {
  list: [
    {
      "name": 'ZONAS',
      "image": 'https://placeholdit.imgix.net/~text?txtsize=14&txt=145%C3%97125&w=145&h=125',
    },
    {
      "name":'GENERALES',
      "image": 'https://placeholdit.imgix.net/~text?txtsize=14&txt=145%C3%97125&w=145&h=125',
    },
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
  return state;
}
