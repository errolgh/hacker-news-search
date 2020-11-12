import React, { useEffect, useState } from 'react'
import { topStoriesQuery } from "../redux/actions"
import { useSelector, useDispatch } from 'react-redux'

export default function TopStories () {
    const topStories = useSelector(() => topStoriesQuery())
    const storyWrapper = () => topStories()
    const [data, setData] = useState( [] )

    const dispatch = useDispatch()

    
    useEffect(() => {
        console.log("useEffect() has executed")
        console.log(topStories())
        storyWrapper()
        // eslint-disable-next-line
    },[])


    const renderStories = () => {
        return data.map(article => {
            return (<li className="App-link">
                        <a key={article[article]} href={article.url}>{article.title}</a>
                    </li>)
        })
    }

    return (
        <div>
            <h3 className="SubHeader">TopStories</h3>
            <ul>
                {renderStories()}
            </ul>
        </div>
    )
}

            