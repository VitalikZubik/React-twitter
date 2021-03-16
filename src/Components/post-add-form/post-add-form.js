import React from 'react';
import style from './post-add-form.module.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className={style.add_form}>
            <input type='text' placeholder='О чем вы думаете сейчас?'/>
            <button onClick={() => onAdd('Hello')} type='submit'>Добавить</button>
        </div>
    )
}

export default PostAddForm;