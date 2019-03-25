const postits = (state = [], action) => {
  switch (action.type) {
    case 'POSTITS':
      return action.postits;
    case 'ADD_POSTIT':
      return [action.postit, ...state];
    case 'DELETE_POSTIT':
      return state.filter(p => p.id !== action.id);
    // case 'EDIT_POSTIT':
    //   return state.map( p => {
    //     if (p.id === action.id)
    //       reuturn {...p, note}
    //     return p
    //   })
    default:
      return state;
  }
};

export default postits;
