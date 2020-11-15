import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitQuery, lastQuery, addToHistory } from '../redux/actions'

export default function SearchBar () {
    const [query, setQuery] = useState("")
    const history = useSelector(state => state.history)
    const dispatch = useDispatch()
    

    const handleInput = e => {
        setQuery(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(submitQuery(query))
        dispatch(lastQuery(query))
        // only add this query to history if it does not already exist
        !history.includes(query) && dispatch(addToHistory(query))
        setQuery("")
    }


    return (
        <div className="App">
            <h1>Hacker News Story Search</h1>
            <form onSubmit={(e)=>handleSubmit(e)} id="searchForm">
                <input
                    placeholder="Search for Stories"
                    onChange={handleInput}
                    value={query}
                    id="prompt"
                    required
                />
                <input 
                    className="Left-margin"
                    value="Search"
                    type="submit"
                />
            </form>
        </div>
    )
}