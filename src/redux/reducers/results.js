export const resultsReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_RESULTS":
            let results = [...action.payload]
            return [...state, results]
        case "CLEAR_RESULTS":
            return state
        default:
            return state
    }
}