import React, { useEffect, useState } from 'react'
import './Feed.css'
import './Widgets.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move'
import SearchIcon from '@material-ui/icons/Search'
import { StylesContext } from '@material-ui/styles'


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    //console.log(posts)

    return (
        <div className="feed">
            <div>
                <div className="feed__header display">
                    <div>Health Care</div>
                    <div className="widgets__input">
                        <SearchIcon
                            className="widgets__SearchIcon"
                        />
                        <input placeholder="Search" type="text" />
                    </div>
                </div>

            </div>

            <TweetBox />
            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        image={post.image}
                        avatar={post.avatar}
                    />
                ))}
            </FlipMove>
        </div>
    )
}
export default Feed
