import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { topStoriesQuery } from "../redux/actions"
import { topStoriesReducer } from "../redux/reducers/topstories"

export default function TopStories () {
    const selector = useSelector( state => state.topStoriesReducer)
    const dispatch = useDispatch()
    
    useEffect(() => dispatch( topStoriesQuery(selector)),[])
    
    // const renderStories = () => {
        //     return data.map(article => {
            //         return (<li className="App-link">
            //                     <a key={article[article]} href={article.url}>{article.title}</a>
            //                 </li>)
            //     })
            // }

    return (
        <div>
            <h3 className="SubHeader">TopStories</h3>
            <ul>
                {/* {renderStories()} */}
            </ul>
        </div>
    )
}



