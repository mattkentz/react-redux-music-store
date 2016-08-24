import Search from '../presentation/Search';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArtists: (name) => {
      dispatch(fetchArtists(name));
    },
    updateSearch: (value) => {
      dispatch({
        type: 'UPDATE_SEARCH',
        value: value
      })
    }
  }
}

function fetchArtists(name) {
  return function (dispatch, getState) {
    dispatch({ type: 'GET_ARTIST_REQUEST' });

    fetch(`https://api.spotify.com/v1/search?type=artist&q=${name}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then( data => {
        dispatch ({
          type: 'UPDATE_ARTISTS',
          value: data.artists.items
        });
      });
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;