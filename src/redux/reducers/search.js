export const searchReducer = (state = "", action) => {
    switch(action.type) {
        case "UPDATE_QUERY":
            return action.payload
        case "CLEAR_QUERY":
            return state
        default:
            return state
    }
}