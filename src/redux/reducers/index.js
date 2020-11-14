import { resultsReducer } from './results'
import { historyReducer } from './history'
import { queryReducer } from './query'
import { topStoriesReducer } from './topstories'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    results : resultsReducer,
    history : historyReducer,
    query : queryReducer,
    topStories : topStoriesReducer
})



//potentially simpler reducers:

// updateQuery   ()
// getResults
// deleteHistory

