const initialState = {
    users: [],
    loadUsers: false,
    selectedUserId: null,
}

export const users = (state = initialState, action) => {
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

        case "select/user":
            return {
                ...state,
                selectedUserId: action.payload
            }

        default:
            return state
    }
}