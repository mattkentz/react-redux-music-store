import React  from 'react';
import '../../App.css';

import SearchContainer from '../container/SearchContainer';
import ArtistListContainer from '../container/ArtistListContainer';

const App = () => {

  return (
    <div>
      <ul>
        <SearchContainer />
        <ArtistListContainer />
      </ul>
    </div>
  );
}

export default App;
