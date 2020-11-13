import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { topStoriesQuery } from "../redux/actions"

export default function TopStories () {
    const selector = useSelector( state => state)
    const dispatch = useDispatch()

    // perhaps useeffect with dispatch 
    // useEffect(() => {
    //     dispatch( {type: "GET_TOP_STORIES"} )        
    // },[])

    return (
        <div>
            <h3 className="SubHeader">TopStories</h3>
            <ul>
                {/* {renderStories()} */}
            </ul>
        </div>
    )
}




// const renderStories = () => {
    //     return data.map(article => {
        //         return (<li className="App-link">
        //                     <a key={article[article]} href={article.url}>{article.title}</a>
        //                 </li>)
        //     })
        // }
        
        
        // const topStories = useSelector(() => topStoriesQuery())
        // const storyWrapper = () => topStories()
        // const [data, setData] = useState( [] )
        // const dispatch = useDispatch()
        
        // Not using any hooks properly.
        // Redux-thunk was suggested as the middleWare import.
        
        // useEffect(() => {
            //     console.log("useEffect() has executed")
            //     console.log(topStories())
            //     storyWrapper()
            //     // eslint-disable-next-line
            // },[])