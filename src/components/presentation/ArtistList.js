import React  from 'react';
import { Link } from 'react-router'

const ArtistList = ({ artists, updateSelectedArtist }) => {

  return (
    <div className="artists">
      <h1>Artists</h1>
      <ul>
        { artists.map( artist => {
          return (
          <Link key={artist.id} to={`/artist/${artist.id}`}>
            <li onClick={() => updateSelectedArtist(artist.id)}>
              {artist.name}
            </li>
          </Link>
          )
        })}
      </ul>
    </div>
  );
}

export default ArtistList;
