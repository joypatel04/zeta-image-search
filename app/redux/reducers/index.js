import {combineReducers} from 'redux';

import {googleImageSearchReducer} from '../../packages/services/index';

export default combineReducers({
  googleImages: googleImageSearchReducer,
});
