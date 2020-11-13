import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { topStoriesQuery } from "../redux/actions"

export default function TopStories () {
    const stories = useSelector( state => state.topStoriesReducer[0])
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(topStoriesQuery(stories))
    },[])

    const renderStories = () => {
        return stories.map(s => {
            return (<li className="App-link">
                        <a key={s.title} href={s.url}>{s.title}</a>
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