function artists(state = [], action) {
  switch (action.type) {
    case 'UPDATE_ARTISTS':
      return action.value;
    default:
      return state;
  }
}

export default artists;