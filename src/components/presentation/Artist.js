import React  from 'react';
import { Link } from 'react-router'

const Artist = ({ artist, handleClick }) => {

    const getImageUrl = (images) => {
        if (images && images.length > 0) {
            return images[0].url;
        }
    }

    return (
        <Link to={`/artist/${artist.id}`}>
            <div className="artist" onClick={() => handleClick(artist)}>
                <img src={getImageUrl(artist.images)} alt={artist.name} className="artist__logo"/>
                <div className="artist__details">
                    <h2>{artist.name}</h2>
                    <div className="artist__genres">
                        { artist.genres.map( genre => {
                            return (
                                <span key={genre} className="artist__genre">{genre}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Artist;
