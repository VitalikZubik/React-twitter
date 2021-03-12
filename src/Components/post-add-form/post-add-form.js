import React from 'react';

const PostAddForm = () => {
    return (
        <form>
            <input type='text' placeholder='О чем вы думаете сейчас?'/>
            <button type='submit'>Добавить</button>
        </form>
    )
}

export default PostAddForm;