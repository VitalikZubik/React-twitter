import React from 'react';
import PostListItem from '../post-list-item';
import style from './post-list.module.css';

const PostList = () => {
    return (
        <ul className={style.post_list}>
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    )
}

export default PostList;