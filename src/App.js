import './App.css'
import SearchBar from './components/SearchBar'
import History from './components/History'
import Results from './components/Results'
import TopStories from './components/TopStories'

export default function App () {
  return (
    <div>
      <SearchBar />
      <Results />
      <TopStories />
      <History />
    </div>
  )
}
  