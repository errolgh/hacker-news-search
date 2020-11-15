import { useSelector, useDispatch } from 'react-redux'
import { clearHistory, submitQuery, lastQuery } from '../redux/actions'

export default function History () {
    const history = useSelector(state => state.history)
    const lastState = useSelector(state => state)
    const dispatch = useDispatch()



    const handleQuery = query => {
        dispatch(submitQuery(query))
        dispatch(lastQuery(query))
    }

    const renderHistory = () => {
        console.log("lastState: ", lastState)
        console.log('history:' , history)
        return history.map(h => {
            return (<li className="App-li">
                <button 
                    key={h} 
                    onClick={()=>handleQuery(h)}
                    className="App-history">
                        {h}
                </button>
            </li>
            )
        })
    }


    return (
        <div>
            {!history.length && <div><p className="History-tip">(No recent history)</p></div>}
            {!!history.length &&
                <div>
                    <h3 className="SubHeader">Search History ({history.length})</h3>
                    <ul>
                        {renderHistory()}
                    </ul>
                    <button className= "Button-margin" onClick={()=>dispatch(clearHistory())}>Clear History</button>
                </div>
            }
        </div>
    )
}