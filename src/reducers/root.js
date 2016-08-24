import { combineReducers } from 'redux';
import artists from './artists';
import albums from './albums';
import search from './search';
import selectedArtist from './selectedArtist';

const rootReducer = combineReducers({
  artists,
  selectedArtist,
  albums,
  search,
});

export default rootReducer;