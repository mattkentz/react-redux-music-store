function albums(state = [], action) {
  switch (action.type) {
    case 'UPDATE_ALBUMS':
      return action.value || state;
    default:
      return state;
  }
}

export default albums;