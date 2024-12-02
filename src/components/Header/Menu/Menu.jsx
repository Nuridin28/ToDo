import React from 'react'
import Pager from './Pager/Pager'
import './Menu.css'
import AddBtn from './AddBtn/AddBtn'
export default function Menu(props) {
  const {activeBtn, setActiveBtn, todos, setTodos, filteredTodos, setFilteredTodos} = props;
  return (
    <div className='menu'>
      <Pager activeBtn = {activeBtn} setActiveBtn = {setActiveBtn} filteredTodos = {filteredTodos} setFilteredTodos = {setFilteredTodos}/>
      <AddBtn todos={todos} setTodos = {setTodos} filteredTodos = {filteredTodos} setFilteredTodos = {setFilteredTodos}/>
    </div>
  )
}
