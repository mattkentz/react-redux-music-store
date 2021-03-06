import ArtistList from '../presentation/ArtistList';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  return {
    artists: state.artists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedArtist: (artist) => {
      dispatch({
        type: 'UPDATE_SELECTED_ARTIST',
        value: artist
      })
    }
  }
}

const ArtistListContainer = connect(mapStateToProps, mapDispatchToProps)(ArtistList);

export default ArtistListContainer;