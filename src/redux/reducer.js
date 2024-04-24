const initialState = {
    users: [],
    loadUsers: false,
    albumes: [],
    loadAlbums: false,
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

        case "load/albums/start":
            return {
                ...state,
                loadAlbumes: true
            }
            
        case "load/albums/fulfilled":
            return {
                ...state,
                loadAlbumes: false,
                albumes: action.payload
            }
        
        case "select/user":
            return {
                ...state,
                selectedUserId: action.payload
            }

        case "search/filter/albums":
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state
    }
}