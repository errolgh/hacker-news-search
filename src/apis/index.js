import axios from 'axios'

export const SEARCH_API = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/search?&tags=story&page=1&hitsPerPage=12&query='
})

export const TOP_STORIES_API = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=12'
})