import React  from 'react';
import Artist from './Artist';

const ArtistList = ({ artists, updateSelectedArtist }) => {

  return (
    <div className="artists">
      <h1>Artists</h1>
      <ul>
        { artists.map( artist => {
          return (
          <Artist artist={artist} handleClick={updateSelectedArtist}/>
          )
        })}
      </ul>
    </div>
  );
}

export default ArtistList;
