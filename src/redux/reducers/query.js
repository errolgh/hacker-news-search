export const queryReducer = (state = "", action) => {
    switch(action.type) {
        case "SUBMIT_QUERY":
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}