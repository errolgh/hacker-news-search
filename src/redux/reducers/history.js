export const historyReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TO_HISTORY":
            console.log(action)
            let newHistory = state.filter(query => query !== action.payload)
            return [...state, newHistory]
        case "CLEAR_HISTORY":
            return state
        default:
            return state
    }
}