import React from 'react';
import style from './post-status-filter.module.css';

const PostStatusFilter = () => {
    return (
        <div className={style.wraper_filter}>
            <button className={style.all}>Все</button>
            <button className={style.liked}>Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;