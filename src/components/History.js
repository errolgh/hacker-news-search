import { useSelector } from 'react-redux'

export default function History () {
    const history = useSelector(state => state.history[0])
    const lastState = useSelector(state => state)
// this component will render results based on "pushing" queries into a history array
// i will need to use useSelector here and possibly a state object to update history as a user searches


    const renderHistory = () => {
        console.log("lastState: ", lastState)
        console.log('history:' , history)
        // this should trigger a search on the last history event

        // render an a tag that generates a results page based on that search parameter

        // the history object needs a query value -- that's it!

        // if the result is already in the history array, do not add it to the history

        // dispatch an action with the query and history array?
        return history.map(h => {
            return (<li>{h}</li>
            )
        })
    }


    return (
        <div>
            {history &&
                <div>
                    <h3 className="SubHeader">Your Search History ({history.length})</h3>
                    <ul>
                        {renderHistory()}
                    </ul>
                    <button className= "Button-margin">Clear History</button>
                </div>
            }
        </div>
    )
}