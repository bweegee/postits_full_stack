import {combineReducers} from 'redux';
import postits from './postits';
import toggleform from './toggleform';

const rootReducer = combineReducers({
  postits,
  toggleform,
});

export default rootReducer;
