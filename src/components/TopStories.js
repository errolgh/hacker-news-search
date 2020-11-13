import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { topStoriesQuery } from "../redux/actions"

export default function TopStories () {
    const stories = useSelector( state => state.stories)
    const dispatch = useDispatch()
    console.log("stories:", stories)
    
    useEffect(() => {
        dispatch(topStoriesQuery(stories))
    },[])

    const renderStories = () => {
        return stories.map(s => {
            return (<li className="App-link">
                        <a  href={s.url}>{s.title}</a>
                    </li>)
        })
    }
            
    return (
        <div>
            <h3 className="SubHeader">TopStories</h3>
            <ul>{stories && renderStories()}</ul>
        </div>
    )
}

// key={s[article]}


