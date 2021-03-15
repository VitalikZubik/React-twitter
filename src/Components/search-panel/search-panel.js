import React from 'react';
import style from './search-panel.module.css';

const SearchPanel = () => {
    return (
        <input className={style.search_panel} type='text' placeholder='Поиск по записям'/>
    )
}

export default SearchPanel;