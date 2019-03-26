import axios from 'axios'

export const getPostIts = () => {
  return (dispatch) => {
    axios.get("/api/postits")
      .then( res => dispatch({ type: "POSTITS", postits: res.data, }))
  }
}

export const addPostIt = (postit) => {
  return (dispatch) => {
    axios.post('/api/postits', {postit})
      .then( res => dispatch({ type: 'ADD_POSTIT', postit: res.data, }))
  }
}

export const updatePostIt = (postit) => {
  return (dispatch) => {
    axios.put(`/api/postits/${postit.id}`, { postit })
      .then( res => dispatch({ type: 'UPDATE_POSTIT',postit: res.data, }))
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case "POSTITS":
      return action.postits
    case "ADD_POSTIT":
      return [action.postit, ...state]
    case "UPDATE_POSTIT":
      return state.map(p => {
        if (p.id === action.postit.id)
          return action.postit
        return p
})
    default:
      return state;
  }
}
    // case 'DELETE_POSTIT':
    //   return state.filter(p => p.id !== action.id);
