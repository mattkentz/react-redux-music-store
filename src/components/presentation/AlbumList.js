import React, { Component }  from 'react';
import Album from './Album';
import Artist from './Artist';


class AlbumList extends Component {

  componentWillMount () {
    this.props.fetchAlbums(this.props.selectedArtist.id);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedArtist !== this.props.selectedArtist) {
      this.props.fetchAlbums(nextProps.selectedArtist.id);
    }
  }

  render () {
    const { albums, selectedArtist } = this.props;
    return (
      <div className="albumList">
        <Artist artist={selectedArtist}/>
        <hr/>
        <h1>Albums</h1>
        <div className="albumList__albums">
          { albums.map( album => {
            return (
                <Album key={album.id} album={album}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AlbumList;
