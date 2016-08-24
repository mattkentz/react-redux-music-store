function albums(state = [], action) {
  switch (action.type) {
    case 'UPDATE_ALBUMS':
      return action.value;
    default:
      return state;
  }
}

export default albums;