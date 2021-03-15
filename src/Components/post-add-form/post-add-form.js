import React from 'react';
import style from './post-add-form.module.css';

const PostAddForm = () => {
    return (
        <form className={style.add_form}>
            <input type='text' placeholder='О чем вы думаете сейчас?'/>
            <button type='submit'>Добавить</button>
        </form>
    )
}

export default PostAddForm;