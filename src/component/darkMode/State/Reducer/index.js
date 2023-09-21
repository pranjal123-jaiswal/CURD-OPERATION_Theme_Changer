// rootReducer.js

import { combineReducers } from 'redux';
import themeReducer from './theme'; // Import your theme reducer

const rootReducer = combineReducers({
  theme: themeReducer, // Add your theme reducer to the root reducer
  // ...other reducers if you have them
});

export default rootReducer;
