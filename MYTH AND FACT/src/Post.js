import { Avatar } from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import React, { forwardRef } from 'react'
import './Post.css'

const Post = forwardRef(
    ({
        displayName,
        username,
        verified,
        text,
        image,
        avatar
    }, ref) => {
        return (
            <div className="post" ref={ref}>
                <div className="post__avatar">
                    <Avatar
                        src={avatar}
                    />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                {displayName}
                                {/* <span className="post__headerSpecial">
                                    {verified && <VerifiedUserIcon className="post__badge" />}
                                    @{username}
                                </span> */}
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <img
                        src={image}
                        alt=""
                    />
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" style={{ color: '#1DB954' }} />
                        <FavoriteBorderIcon fontSize="small" style={{ color: '#1DB954' }} />
                    </div>
                </div>
            </div>
        )
    })

export default Post
