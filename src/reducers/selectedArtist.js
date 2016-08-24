function selectedArtist(state = [], action) {
  switch (action.type) {
    case 'UPDATE_SELECTED_ARTIST':
      return action.value;
    default:
      return state;
  }
}

export default selectedArtist;