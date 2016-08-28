import React  from 'react';
import { Link } from 'react-router';
import '../../css/Artist.css';

const Artist = ({ artist, handleClick }) => {

    const getImageUrl = (images) => {
        if (images && images.length > 0) {
            return images[0].url;
        }
    }

    if (!artist || artist.length < 1) {
        return <h1>Loading artist...</h1>;
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
