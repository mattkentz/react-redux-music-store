import React  from 'react';
import '../../App.css';

import SearchContainer from '../container/SearchContainer';
import ArtistListContainer from '../container/ArtistListContainer';
import AlbumContainer from '../container/AlbumContainer';

const App = () => {

  return (
    <div className="app">
      <SearchContainer />
      <div className="results">
        <ArtistListContainer />
        <AlbumContainer />
      </div>
    </div>
  );
}

export default App;
