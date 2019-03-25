import {combineReducers} from 'redux';
import postits from './postits';
import nextId from './nextId';
import toggleform from './toggleform';

const rootReducer = combineReducers({
  postits,
  nextId,
  toggleform,
});

export default rootReducer;
