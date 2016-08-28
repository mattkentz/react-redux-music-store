import React  from 'react';

const Album = ({ album }) => {

    const getImageUrl = (images) => {
        if (images && images.length > 0) {
            return images[0].url;
        }
    }

    return (
        <div className="album">
            <img src={getImageUrl(album.images)} alt={album.name} className="album__logo"/>
            <div className="album__details">
                <h2>{album.name}</h2>
            </div>
        </div>
    )
}

export default Album;
