import React from 'react';
import style from './post-status-filter.module.css';

export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {
        const {filter, onFilterSelect} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const clazz = active ? `${style.active}` : ''
            return (
                <button 
                    key={name} 
                    className={`${clazz}`}
                    onClick={() => onFilterSelect(name)}
                    >{label}</button>
            )
        })

        return (
            <div className={style.wraper_filter}>
                {buttons}
            </div>
        )
    }
}