import { useState } from 'react'

function SearchBar() {
    const [query, setQuery] = useState("")

    const handleInput = event => setQuery(event.target.value)


    const handleSubmit = event => {
        // this needs to be update to the state \/
        
        alert(`Okay, I'll fetch these ${query} stories for you.`)
        event.preventDefault()
        setQuery("")
    }


    return (
        <div className="App">
            <h1>Hacker News Story Search</h1>
            <form onSubmit={handleSubmit} id="searchform">
                <input
                    id="prompt"
                    onChange={handleInput}            
                    value={query}
                    placeholder="Search for Stories"
                />
            </form>
        </div>
    )
}

export default SearchBar