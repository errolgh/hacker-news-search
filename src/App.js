import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import History from './components/History'
import Results from './components/Results'
import { API_SEARCH, API_TOP } from './api'
import './App.css'

const useFetch = url => {
  const [data, setData] = useState( [] )

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const response = await fetch(url)
    const data = await response.json()
    let newState = data.hits.map((i) => i)
    setData(data.hits)
  }, [])
  console.log(data)
  return { data }
}

export default function App() {
  const { data } = useFetch(`${API_TOP}`)

  return (
    <div>
      <SearchBar />
      <Results />
      <h3>Top Stories</h3>
      <ul>
          {data.map(article => (
            <li className="App-link">
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
      </ul>
      <History />
    </div>
  )
}
  