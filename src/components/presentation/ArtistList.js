import React  from 'react';
import Artist from './Artist';
import '../../css/ArtistList.css';

import SearchContainer from '../container/SearchContainer';

const ArtistList = ({ artists, updateSelectedArtist }) => {

  return (
    <div className="artistList">
      <SearchContainer />
      <h1>Artists</h1>
        <div className="artistList__artists">
            { artists.map( artist => {
                return (
                    <Artist key={artist.id} artist={artist} handleClick={updateSelectedArtist}/>
                )
            })}
        </div>
    </div>
  );
}

export default ArtistList;
