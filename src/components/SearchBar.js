import { useState } from "react"
import { useDispatch } from 'react-redux'
import { submitQuery } from '../redux/actions'

function SearchBar() {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    

    const handleInput = event => {
        // console.log(event.target.value)
        setQuery(event.target.value)
    }


    const handleSubmit = event => {
        event.preventDefault()
        // debugger
        console.log(event.target.value)
        dispatch(submitQuery(event.target.value))
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