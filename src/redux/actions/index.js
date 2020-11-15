import { TOP_STORIES_API, SEARCH_API } from '../../apis'


//axios
export const topStoriesQuery = () => async dispatch => {
  const response = await TOP_STORIES_API.get('')
  dispatch( {type: 'GET_TOP_STORIES', payload: response.data.hits } )
}


export const submitQuery = query => async dispatch => {
  const response = await SEARCH_API.get(`${query}`)
  dispatch( {type: "GET_RESULTS", payload: response.data.hits } )
  dispatch( {type: "CLEAR_ENTRY", payload: query } )
}


//ux
export const lastQuery = query => {
  return {
    type: "SAVE_LAST_QUERY",
    payload: query
  }
}


export const clearResults = () => {
    return {type: 'CLEAR_RESULTS'}
}


//history
export const addToHistory = query => {
  return {
      type: "ADD_TO_HISTORY",
      payload: query
  }
}


export const clearHistory = () => {
  return {type: "CLEAR_HISTORY"}
}


export const clearQuery = query => {
  return {
    type: "CLEAR_QUERY",
    payload: query
  }
}