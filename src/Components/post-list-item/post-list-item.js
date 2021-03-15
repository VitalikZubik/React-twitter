import React from 'react';
import style from './post-list-item.module.css';

const PostListItem = () => {
    return (
        <li className={style.list_item}>
            <span className={style.list_item_label}>
                Hello World!
            </span>
            <div className={style.wraper_fa}>
                <button type='botton'><i className="fa fa-star"></i></button>
                <button type='botton'><i className="fa fa-trash-o"></i></button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;