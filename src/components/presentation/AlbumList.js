import React, { Component }  from 'react';
import '../../css/AlbumList.css';
import Album from './Album';
import Artist from './Artist';


class AlbumList extends Component {

  componentWillMount () {
    if (this.props.selectedArtist && this.props.selectedArtist.id) {
      this.props.fetchAlbums(this.props.selectedArtist.id);
    } else if (this.props.routeParams.id) {
      this.props.fetchArtist(this.props.routeParams.id);
    }
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
