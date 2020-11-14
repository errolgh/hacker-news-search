import './App.css'
import SearchBar from './components/SearchBar'
import History from './components/History'
import Results from './components/Results'
import TopStories from './components/TopStories'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function App() {
  const fullState = useSelector(state => state)
  

  useEffect(()=> {
    console.log("fullState; ", fullState)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <SearchBar />
      <Results />
      <TopStories />
      <History />
    </div>
  )
}
  