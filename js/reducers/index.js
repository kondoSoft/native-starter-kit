
import { combineReducers } from 'redux';

import drawer from './drawer';
import cardNavigation from './cardNavigation';
import user from './user';
import list from './list';
import listZone from './listZone';
import listCategory from './listCategory';

export default combineReducers({

  drawer,
  user,
  list,
  listZone,
  listCategory,
  cardNavigation,

});
