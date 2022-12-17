import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "CodeWithAkky",
            username: "akky_im",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1266938830608875520/f-eajIjB_400x400.jpg"
        })

        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <textarea
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="Mental Tips"
                        type="text"
                    />
                </div>
                <Button
                    onClick={sendTweet}
                    className="tweetBox__tweetButton">ASK</Button>
            </form>
        </div>
    )
}

export default TweetBox
