export const topStoriesReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_TOP_STORIES":
            // let stories =
            return [...state, action.payload]
        default:
            return state
    }
}