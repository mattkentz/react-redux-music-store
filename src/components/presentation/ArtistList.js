import React  from 'react';

const ArtistList = ({ artists, updateSelectedArtist }) => {

  return (
    <div className="artists">
      <h1>Artists</h1>
      <ul>
        { artists.map( artist => {
          return (
            <li key={artist.id} onClick={() => updateSelectedArtist(artist.id)}>
              {artist.name}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default ArtistList;
