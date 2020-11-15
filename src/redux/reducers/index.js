import { topStoriesReducer } from './topstories'
import { lastQueryReducer } from './lastQuery'
import { resultsReducer } from './results'
import { historyReducer } from './history'
import { queryReducer } from './query'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    topStories : topStoriesReducer,
    lastQuery : lastQueryReducer,
    results : resultsReducer,
    history : historyReducer,
    query : queryReducer
})