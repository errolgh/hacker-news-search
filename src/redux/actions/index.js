import { TOP_STORIES_API } from '../../apis'

export const topStoriesQuery = () => async () => {
  const response = await TOP_STORIES_API.get('')
  console.log("from /actions/index.js: ", response.data.hits)
  return {
    type: 'GET_TOP_STORIES', 
    payload: response.data.hits
  }
}

// results
// this reducer should have the axios response payload
// export const getResults = results => {
//   return {
//       type: "GET_RESULTS",
//       payload: results
//   }
// }
// i'm pretty sure this is going to have to take in a query obj from the form submission
// else leave the argument for getResults as '()'

// export const getResults = query => async dispatch => {
//   const response = await searchQuery.get(query)
//   dispatch( {type: 'GET_RESULTS', payload: response})
// }

export const clearResults = results => {
  return {
      type: "CLEAR_RESULTS",
      payload: results  // probably not necessary here.
  }
}

/*

REMEMBER: "PAYLOAD" IS ACTUALLY OPTIONAL  */
// search
export const updateQuery = query => {
  return {
      type: "UPDATE_QUERY",
      payload: query
  }
}

export const clearQuery = query => {
  return {
      type: "CLEAR_QUERY",
      payload: query  // probably not necessary here.
  }
}



//history
export const addHistory = result => {
  return {
      type: "ADD_HISTORY",
      payload: result
  }
}

export const clearHistory = result => {
  return {
      type: "CLEAR_HISTORY",
      payload: result  // probably not necessary here.
  }
}