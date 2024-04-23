const initialState = {
    users: [],
    loadUsers: false,
    todos: [],
    loadTodos: false,
    selectedUserId: null,
    filter: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "load/users/start":
            return {
                ...state,
                loadUsers: true
            }
        
        case "load/users/fulfilled":
            return {
                ...state,
                loadUsers: false,
                users: action.payload
            }

        case "load/todos/start":
            return {
                ...state,
                loadTodos: true
            }
            
        case "load/todos/fulfilled":
            return {
                ...state,
                loadTodos: false,
                todos: action.payload
            }
        
        case "select/user":
            return {
                ...state,
                selectedUserId: action.payload
            }

        case "search/filter/todos":
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state
    }
}