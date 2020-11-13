export default function History () {
// this component will render results based on "pushing" queries into a history array
// i will need to use useSelector here and possibly a state object to update history as a user searches
    return (
        <div>
            {false &&
                <div>
                    <h3 className="SubHeader">Your Search History</h3>
                    <button classname= "Button-margin">Clear History</button>
                </div>
            }
        </div>
    )
}