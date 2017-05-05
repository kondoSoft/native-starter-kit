
import type { Action } from '../actions/types';
import { SET_CATEGORY, PRINT_CLASSIFIEDS, PRINT_CLASSIFIEDS_PK } from '../actions/listCategory';
import { PK_ZONE } from '../actions/listZone'


export type State = {
    results: string
}

const initialState = {
  results: [

  ],
  selectedCategory: undefined,
};

var classifieds =[];

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      selectedCategory: action.payload,
    };
  }
  else if (action.type === PK_ZONE) {

    var establishment = action.payload.results.map((item, i, arr) =>{
      item.classifieds.map((itemClassifieds, i) =>{
        classifieds.push(itemClassifieds)
        return classifieds
      })
    })
    console.log(classifieds);
    return {
      ...state,
      results: classifieds
    }
  }


  return state;
}
