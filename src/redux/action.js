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
export const loadTodos = () => {
    return dispatch => {
        dispatch({type: "load/todos/start"})

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => dispatch({
            type: "load/todos/fulfilled",
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

export const setChoseTodo = (text) => {
  return {
    type: "search/filter/todos",
    payload: text
  }
}