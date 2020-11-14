export const topStoriesReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_TOP_STORIES":
            return [...action.payload, ...state]
        default:
            return state
    }
}