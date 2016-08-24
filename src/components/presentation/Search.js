import React  from 'react';

const Search = ({ search, updateSearch, fetchArtists }) => {

  return (
    <div>
        <input type="text" value={search}
               onChange={ (e) => {
                updateSearch(e.target.value)
               }}/>
        <button onClick={() => fetchArtists(search)}>Get Artists</button>
    </div>
  );
}

export default Search;
