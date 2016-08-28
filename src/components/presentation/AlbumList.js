import React, { Component }  from 'react';
import Album from './Album';


class AlbumList extends Component {

  componentWillMount () {
    this.props.fetchAlbums(this.props.selectedArtist);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedArtist !== this.props.selectedArtist) {
      this.props.fetchAlbums(nextProps.selectedArtist);
    }
  }

  render () {
    const { albums } = this.props;
    return (
      <div className="albums">
        <h1>Albums</h1>
        <ul>
          { albums.map( album => {
            return (
              <Album album={album}/>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AlbumList;
