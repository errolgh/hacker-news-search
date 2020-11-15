export const historyReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TO_HISTORY":
            return [action.payload, ...state]
        case "CLEAR_HISTORY":
            return []
        case "CLEAR_QUERY":
            console.log("we are close")
            return state
        default:
            return state
    }
}