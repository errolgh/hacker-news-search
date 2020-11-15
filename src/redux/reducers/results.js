export const resultsReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_RESULTS":
            // Only show results with urls
            let isURL = [...action.payload.filter(story => story.url)]
            return [...isURL]
        case "CLEAR_RESULTS":
            return []
        default:
            return state
    }
}