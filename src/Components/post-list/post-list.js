import React from 'react';
import PostListItem from '../post-list-item';
import style from './post-list.module.css';

const PostList = ({posts, onDelete}) => {

    const element = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <PostListItem onDelete={() => onDelete(id)} {...itemProps}/>
            </li>
        )
    })
    return (
        <ul className={style.post_list}>
            {element}
        </ul>
    )
}

export default PostList;