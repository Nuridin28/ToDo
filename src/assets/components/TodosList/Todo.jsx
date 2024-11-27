import React, { Component } from 'react'
import menu from './img/menu.svg'
import './styles.css'
import TodoMenu from './TodoMenu/TodoMenu';

class Todo extends Component {
  render() {
    const {text} = this.props;
    return (
      <div className='todo'>
          <img src={menu} alt="" />
          <input type='checkbox' className='checkbox'/>
          <p>{text}</p>
      </div>
    )
  }
}

export default Todo;