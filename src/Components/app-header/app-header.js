import React from 'react';
import style from './app-header.module.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className={style.wraper_app_header}>
            <h1>Vitali Zubik</h1>
            <h2>{`${allPosts} записи, из них понравилось ${liked}`}</h2>
        </div>
    )
}

export default AppHeader;