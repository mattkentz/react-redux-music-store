import React  from 'react';
import { Link } from 'react-router'

const Artist = ({ artist, handleClick }) => {

    return (
        <Link key={artist.id} to={`/artist/${artist.id}`}>
            <li onClick={() => handleClick(artist.id)}>
                {artist.name}
            </li>
        </Link>
    )
}

export default Artist;
