import React, { Component } from 'react';
import Title from './Title';
import HorizontalDivider from './HorizontalDivider';
import './todos.css'
import TodosList from '../TodosList/TodosList';

class Todos extends Component {
    render() {
        const {currTodos, currBtn} = this.props        
        return (
            <div className='todos'>
                <Title name = {currBtn}/>
                <HorizontalDivider />
                <TodosList currTodos = {currTodos} />
            </div>
        );
    }
}

export default Todos;