export const topStoriesReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_TOP_STORIES":
            let stories = [...action.payload]
            return [...state, stories]
        default:
            return state
    }
}