import { useSelector } from 'react-redux'

export default function Results () {
    const results = useSelector(state => state.results[0])
    const lastQuery = useSelector(state => state.lastQuery)


    const renderResults = () => {
        return results.map(r => {
            return (<li key={r.objectID} className="App-li">
                <a href={r.url}>{r.title}</a>
            </li>)
        })
    }


    return (
        <div>
            {results &&
                <div>
                    <button>Back to Top Stories</button>
                    <h3 className="SubHeader">Showing results for "{lastQuery}"</h3>
                    <ul>{renderResults()}</ul>
                </div>
            } 
        </div>
    )
}