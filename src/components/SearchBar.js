import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { submitQuery, lastQuery, addToHistory } from '../redux/actions'

export default function SearchBar () {
    const [query, setQuery] = useState("")
    const history = useSelector(state => state.history)
    const dispatch = useDispatch()
    

    const handleInput = event => {
        setQuery(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(submitQuery(query))
        dispatch(lastQuery(query))
        !history.includes(query) && dispatch(addToHistory(query))
        setQuery("")
    }


    return (
        <div className="App">
            <h1>Hacker News Story Search</h1>
            <form onSubmit={(event)=>handleSubmit(event)} id="searchForm">
                <input
                    id="prompt"
                    required
                    onChange={handleInput}
                    value={query}
                    placeholder="Search for Stories"
                />
                <input className="Button-margin" type="submit" value="Search" />
            </form>
        </div>
    )
}