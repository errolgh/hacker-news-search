import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topStoriesQuery } from "../redux/actions"

export default function TopStories () {
    const stories = useSelector( state => state.topStories )
    const results = useSelector( state => state.results[0] )
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        dispatch(topStoriesQuery(stories))
        // eslint-disable-next-line
    },[])


    const renderTopStories = () => {
        return stories.map(s => {
            return (<li key={s.objectID} className="App-li">
                <a  href={s.url}>{s.title}</a>
            </li>)
        })
    }
         
    
    return (
        <div>
            {!results && 
                <div>
                   <h3 className="SubHeader">Today's Top Stories</h3>
                   <ul>{stories && renderTopStories()}</ul>
                </div>
            }
        </div>
    )
}