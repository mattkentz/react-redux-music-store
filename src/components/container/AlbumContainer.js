import Albums from '../presentation/Albums';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  return {
    albums: state.albums,
    selectedArtist: state.selectedArtist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: (id) => {
      dispatch(fetchAlbums(id))
    } 
  }
}

function fetchAlbums(id) {
  return function (dispatch, getState) {
    dispatch({ type: 'GET_ALBUM_REQUEST' });

    fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then( data => {
        dispatch ({
          type: 'UPDATE_ALBUMS',
          value: data.items
        });
      });
  }
}

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);

export default AlbumsContainer;