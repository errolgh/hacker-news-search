import { TOP_STORIES_API, SEARCH_API } from '../../apis'

// default render on page Load
export const topStoriesQuery = () => async dispatch => {
  const response = await TOP_STORIES_API.get('')
  // console.log("from /actions/index.js: ", response.data.hits)
  dispatch( {type: 'GET_TOP_STORIES', payload: response.data.hits } )
}


// on submission of query
export const submitQuery = query => async dispatch => {
  const response = await SEARCH_API.get(`${query}`)
  // console.log("from /actions/index.js[submitQuery(){}]: ", response.data.hits)
  dispatch( {type: "GET_RESULTS", payload: response.data.hits } )
}


// dynamic h3 tag for results
export const lastQuery = query => {
  return {
    type: "SAVE_LAST_QUERY",
    payload: query
  }
}


export const clearResults = results => {
  return {type: "CLEAR_RESULTS"}
}


//history
export const addToHistory = query => {
  return {
      type: "ADD_TO_HISTORY",
      payload: query
  }
}


export const clearHistory = result => {
  return {type: "CLEAR_HISTORY"}
}