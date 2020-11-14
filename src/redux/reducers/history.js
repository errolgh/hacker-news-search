export const historyReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TO_HISTORY":
            console.log("action", action)
            return [action.payload, ...state]
        case "CLEAR_HISTORY":
            return [...state]
        default:
            return state
    }
}