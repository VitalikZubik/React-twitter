import React from 'react';
import style from './search-panel.module.css';

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    
    render() {
        return (
            <input 
                className={style.search_panel} 
                type='text' 
                placeholder='Поиск по записям'
                onChange={this.onUpdateSearch}/>
        )
    }
}