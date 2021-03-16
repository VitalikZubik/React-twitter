import React from 'react';
import style from './post-list-item.module.css';

export default class PostListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
    }

    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        let classNames = `${style.list_item}`;
        const {label, onDelete} = this.props;
        const {important, like} = this.state;

        if(important) {
            classNames += ` ${style.important}`
        }

        if(like) {
            classNames += ` ${style.like}`
        }

        return (
            <div className={classNames}>
                <span onClick={this.onLike} className={style.list_item_label}>
                    {label}
                </span>
                <div className={style.wraper_fa}>
                    <button
                        onClick={this.onImportant} 
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