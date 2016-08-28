import AlbumList from '../presentation/AlbumList';
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
    },
    fetchArtist: (id) => {
      dispatch(fetchArtist(id))
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

function fetchArtist(id) {
  return function (dispatch, getState) {
    dispatch({ type: 'GET_ALBUM_REQUEST' });

    fetch(`https://api.spotify.com/v1/artists/${id}`, {
      method: 'GET'
    })
        .then(res => res.json())
        .then( data => {
          dispatch ({
            type: 'UPDATE_SELECTED_ARTIST',
            value: data
          });
        });
  }
}

const AlbumListContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumList);

export default AlbumListContainer;