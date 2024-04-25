const initialState = {
    albumes: [],
    loadAlbums: false,
    filter: ""
}

export const albums = (state = initialState, action) => {
    switch (action.type) {

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

        case "search/filter/albums":
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state
    }
}