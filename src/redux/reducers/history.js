export const historyReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TO_HISTORY":
            console.log("action payload: ", action.payload)
            let newHistory = action.payload
            console.log("newHistory array: ", newHistory)
            return [...state, newHistory]
        case "CLEAR_HISTORY":
            return state
        default:
            return state
    }
}