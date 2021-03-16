import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import style from './app.module.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label:"Going to learn React", important: false, like: false, id: '1'},
                {label:"That is so good", important: false, like: false, id: '2'},
                {label:"I need a break...", important: false, like: false, id: '3'}
            ]
        }

        this.maxId = 4
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);
            const newArr = [...data.splice(0, index), ...data.splice(index + 1)];
            return {
                data: newArr
            };           
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body, 
            important: false, 
            like: false, 
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
   
    render() {
    return (
        <div className={style.wraper}>
            <AppHeader />
            <div className={style.search_filter_panel}>
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList onDelete={this.deleteItem} posts={this.state.data} />
            <PostAddForm onAdd={this.addItem} />
        </div>
    )
   }
}

