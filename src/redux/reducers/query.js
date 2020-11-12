export const queryReducer = (state = "", action) => {
    switch(action.type) {
        case "UPDATE_QUERY":
            return action.payload  
// might need previous state + payload. never seen this functionality before in redux
        case "CLEAR_QUERY":
            return state
        default:
            return state
    }
}