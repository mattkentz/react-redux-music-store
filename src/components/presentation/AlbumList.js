import React, { Component }  from 'react';


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
              <li key={album.id}>
                {album.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AlbumList;
