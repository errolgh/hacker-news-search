import { useState } from "react"
import { useDispatch } from 'react-redux'
import { submitQuery, lastQuery } from '../redux/actions'

function SearchBar() {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    

    const handleInput = event => {
        setQuery(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submit value: " , query)
        dispatch(submitQuery(query))
        dispatch(lastQuery(query))
        setQuery("")
    }


    return (
        <div className="App">
            <h1>Hacker News Story Search</h1>
            <form onSubmit={(event)=>handleSubmit(event)} id="searchform">
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

export default SearchBar