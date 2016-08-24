import React  from 'react';
import '../../App.css';

import SearchContainer from '../container/SearchContainer';

const App = ({children}) => {

  return (
    <div className="app">
      <SearchContainer />
      <div className="results">
        { children }
      </div>
    </div>
  );
}

export default App;
