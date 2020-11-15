import { useDispatch, useSelector } from 'react-redux'
import { clearResults } from '../redux/actions'

export default function Results () {
    const lastQuery = useSelector(state => state.lastQuery)
    const results = useSelector(state => state.results)
    const dispatch = useDispatch()


    const renderResults = () => {
        return results.map(r => {
            return (<li key={parseInt(r.objectID)} className="App-li">
                <a href={r.url}>{r.title}</a>
            </li>) 
        })
    }


    return (
        // Only renders when there are results
        <div>
            {!!results.length &&  
                <div>
                    <h3 className="SubHeader">Showing results {results.length} for "{lastQuery}"</h3>
                    <button 
                        className="Left-margin"
                        onClick={()=>dispatch(clearResults(results))}
                    >
                        Back to Top Stories
                    </button>
                    <ul>{renderResults()}</ul>
                </div>
            } 
        </div>
    )
}