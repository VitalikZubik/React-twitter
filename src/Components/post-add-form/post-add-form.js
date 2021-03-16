import React from 'react';
import style from './post-add-form.module.css';

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form
                className={style.add_form}
                onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholder='О чем вы думаете сейчас?'
                    onChange={this.onValueChange}
                    value={this.state.text} />
                <button
                    type='submit'                    >
                    Добавить</button>
            </form>
        )
    }
}