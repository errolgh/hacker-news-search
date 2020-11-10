import { resultsReducer } from './results'
import { historyReducer } from './history'
import { searchReducer } from './search'
import { combineReducers } from 'redux'


export const rootReducer = combineReducers({
    resultsReducer,
    historyReducer,
    searchReducer
})