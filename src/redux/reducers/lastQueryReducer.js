export const lastQueryReducer = (state = "", action) => {
    switch(action.type) {
        case "SAVE_LAST_QUERY":
            console.log("save last query action: ", action.payload)
            return action.payload
        default:
            return state
    }
}