import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { topStoriesQuery } from "../redux/actions"

export default function TopStories () {
    const stories = useSelector( state => state.topStories[0])
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(topStoriesQuery(stories))
        // eslint-disable-next-line
    },[])

    const renderStories = () => {
        return stories.map(s => {
            return (<li key={s.objectID} className="App-link">
                        <a  href={s.url}>{s.title}</a>
                    </li>)
        })
    }
            
    return (
        <div>
            <h3 className="SubHeader">Today's Top Stoires</h3>
            <ul>{stories && renderStories()}</ul>
        </div>
    )
}