// For load users
export const loadUsers = () => {
  return dispatch => {
    dispatch({type: "load/users/start"})

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => dispatch({
        type: "load/users/fulfilled",
        payload: json
    }))
  }
}

// For load todos 
export const loadAlbums = () => {
    return dispatch => {
        dispatch({type: "load/albums/start"})

        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(json => dispatch({
            type: "load/albums/fulfilled",
            payload: json
        }))
    }
}

export const selectUser = (userId) => {
  return  {
    type: "select/user",
    payload: userId
  }
}

export const setChoseAlbume = (text) => {
  return {
    type: "search/filter/albums",
    payload: text
  }
}