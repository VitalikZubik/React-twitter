import React from 'react';
import style from './post-list-item.module.css';

export default class PostListItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let classNames = `${style.list_item}`;
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        

        if(important) {
            classNames += ` ${style.important}`
        }

        if(like) {
            classNames += ` ${style.like}`
        }

        return (
            <div className={classNames}>
                <span onClick={onToggleLiked} className={style.list_item_label}>
                    {label}
                </span>
                <div className={style.wraper_fa}>
                    <button
                        onClick={onToggleImportant} 
                        type='botton'
                        className={style.btn_star}>
                        <i className='fa fa-star'></i></button>
                    <button
                    onClick={onDelete} 
                    type='botton'
                    className={style.btn_trash}
                    ><i className='fa fa-trash-o'></i></button>
                    <i className={`fa fa-heart ${style.heart}`} ></i>
                </div>
            </div>
        )
    }
}