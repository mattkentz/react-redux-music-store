function search(state = [], action) {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.value;
    default:
      return state;
  }
}

export default search;