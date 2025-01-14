
import type { Action } from '../actions/bookmarks';
import { ADD_BOOKMARK, REMOVE_BOOKMARK, SET_ITEM }from '../actions/bookmarks'
import {REHYDRATE} from 'redux-persist/constants'
//
// export type State = {
//     drawerState: string,
//     drawerDisabled: boolean
// }

const initialState = {
    space:[
        
      ],
    selectedItem: undefined,

};

export default function (state:State = initialState, action:Action): State {
  if (action.type === ADD_BOOKMARK) {
    newState = state.space.filter((val)=>{ return val.id != action.payload.id})
    newState.push(action.payload)
    return{
      ...state,
      space : newState
    }

  }

  if (action.type === REMOVE_BOOKMARK) {
    newState = state.space.filter((val)=>{ return val.id != action.payload})
    return {
      ...state,
      space : newState,
    }
  }
  if (action.type === REHYDRATE) {

    var incoming = action.payload.bookmarks
    // incoming = []
    if (incoming) return {...state, ...incoming,}
    return state

  }
  if (action.type == SET_ITEM){
    return {
      ...state,
      selectedItem: action.payload
    }
  }

  return state;
}
