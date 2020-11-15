import TopStories from './components/TopStories'
import SearchBar from './components/SearchBar'
import History from './components/History'
import Results from './components/Results'
import Footer from './components/Footer'
import './App.css'

export default function App () {
  return (
    <div>
      <SearchBar />
      <Results />
      <TopStories />
      <History />
      <Footer />
    </div>
  )
}
  