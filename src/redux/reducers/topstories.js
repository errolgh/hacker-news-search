export const topStoriesReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_TOP_STORIES":
            // Only show results with urls
            let isURL = [...action.payload.filter(story => story.url)]
            return [...isURL, ...state]
        default:
            return state
    }
}