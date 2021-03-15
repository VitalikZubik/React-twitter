import React from 'react';
import style from './app-header.module.css'

const AppHeader = () => {
    return (
        <div className={style.wraper_app_header}>
            <h1>Vitali Zubik</h1>
            <h2>3 записи, из них понравилось 0</h2>
        </div>
    )
}

export default AppHeader;