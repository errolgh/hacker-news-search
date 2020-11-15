import { useSelector, useDispatch } from 'react-redux'
import { clearHistory, submitQuery, lastQuery, clearQuery } from '../redux/actions'

export default function History () {
    const history = useSelector(state => state.history)
    const dispatch = useDispatch()


    const handleQuery = query => {
        dispatch(submitQuery(query))
        dispatch(lastQuery(query))
    }


    const renderHistory = () => {
        return history.map(h => {
            return (<li key={h} className="App-li">
                <button onClick={()=>handleQuery(h)} className="App-history">
                    {h}
                </button>
                <button className="History-delete" onClick={()=>dispatch(clearQuery(h))}>x</button>
            </li>
            )
        })
    }


    return (
        // only renders when there is a history, else render "no recent history"
        <div>
            {!history.length && <div><p className="History-tip">(No recent history)</p></div>}
            {!!history.length &&
                <div>
                    <h3 className="SubHeader">Search History ({history.length})</h3>
                    <ul>
                        {renderHistory()}
                    </ul>
                    <button className= "Left-margin" onClick={()=>dispatch(clearHistory())}>
                        Clear All History
                    </button>
                </div>
            }
        </div>
    )
}