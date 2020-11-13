import { TOP_STORIES_API, SEARCH_API } from '../../apis'

//default render
export const topStoriesQuery = () => async dispatch => {
  const response = await TOP_STORIES_API.get('')
  // console.log("from /actions/index.js: ", response.data.hits)
  dispatch( {type: 'GET_TOP_STORIES', payload: response.data.hits } )
}



// i'm pretty sure this is going to have to take in a query obj from the form submission
// search

export const submitQuery = query => async dispatch => {
  const response = await SEARCH_API.get(`${query}`)
  console.log("from /actions/index.js[submitQuery(){}]: ", response.data.hits)
  dispatch( {type: "GET_RESULTS", payload: response.data.hits } )
}



export const clearResults = results => {
  return {type: "CLEAR_RESULTS"}
}


export const clearQuery = query => {
  return {type: "CLEAR_QUERY"}
}


//history
export const addHistory = result => {
  return {
      type: "ADD_HISTORY",
      payload: result
  }
}

export const clearHistory = result => {
  return {type: "CLEAR_HISTORY"}
}