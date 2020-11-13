export const resultsReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_RESULTS":
            console.log("we up in the reducuh: ", action.payload)
            let results = [...action.payload]
            return [...state, results]
        case "CLEAR_RESULTS":
            return state
        default:
            return state
    }
}