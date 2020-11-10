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
      payload: query
  }
}


// results
export const getResults = results => {
  return {
      type: "GET_RESULTS",
      payload: results
  }
}

export const clearResults = results => {
  return {
      type: "CLEAR_RESULTS",
      payload: results
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
      payload: result
  }
}