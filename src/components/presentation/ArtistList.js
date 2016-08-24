import React  from 'react';

const ArtistList = ({ artists }) => {

  return (
    <ul>
      { artists.map( artist => {
        return (
          <li>
            {artist.name}
          </li>
        )
      })}
    </ul>
  );
}

export default ArtistList;
