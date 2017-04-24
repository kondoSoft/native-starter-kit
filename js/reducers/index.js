
import { combineReducers } from 'redux';

import drawer from './drawer';
import cardNavigation from './cardNavigation';
import user from './user';
import list from './list';
import listZone from './listZone';
import listCategory from './listCategory';
import listEstablishment from './listEstablishment';
import listTypeClassifieds from './listTypeClassifieds';
export default combineReducers({

  drawer,
  user,
  list,
  listZone,
  listCategory,
  listEstablishment,
  listTypeClassifieds,
  cardNavigation,

});
