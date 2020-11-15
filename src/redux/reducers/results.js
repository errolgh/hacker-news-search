export const resultsReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_RESULTS":
            return [...action.payload]
        case "CLEAR_RESULTS":
            return []
        default:
            return state
    }
}