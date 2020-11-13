export const queryReducer = (state = "", action) => {
    switch(action.type) {
        case "SUBMIT_QUERY":
            console.log(action.payload)
            return action.payload  
// might need previous state + payload. never seen this functionality before in redux
        case "CLEAR_QUERY":
            return state
        default:
            return state
    }
}