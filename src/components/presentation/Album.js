import React  from 'react';

const Album = ({ album }) => {

    return (
        <li key={album.id}>
            {album.name}
        </li>
    )
}

export default Album;
