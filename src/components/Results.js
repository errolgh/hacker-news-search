import { useDispatch, useSelector } from 'react-redux'
import { results } from '../redux/actions'
//results reducer
//useState
//useEffect


export default function Results () {
    const results = useSelector(state => state.results)
    // this component will render and rerender results based on state.results change 
    // may not need useDispatch, but useEffect would be nice to rerender with every state.results change.


    


    return (
        <div>
            {results &&
                <div>
                    <h3 className="SubHeader">Results</h3>
                    <button className= "Button-margin">Clear Results</button>
                </div>
            }
            
        </div>
    )
}