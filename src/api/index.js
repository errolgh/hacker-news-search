const api = 'http://hn.algolia.com/api/v1/search'

const API_SEARCH = `${api}?&hitsPerPage=15&tags=story&query=`
const API_TOP = `${api}?tags=front_page&hitsPerPage=15`

export { API_TOP, API_SEARCH }
