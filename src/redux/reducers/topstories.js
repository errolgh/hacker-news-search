export const topStoriesReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_TOP_STORIES":
            return [...state, action.payload]
        default:
            return state
    }
}