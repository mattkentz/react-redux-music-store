import { combineReducers } from 'redux';
import artists from './artists';
import albums from './albums';
import search from './search';

const rootReducer = combineReducers({
  artists,
  albums,
  search,
});

export default rootReducer;