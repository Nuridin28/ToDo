import React from 'react'
import Todo from './Todo'
import './styles.css'

export default function TodosList({currTodos}) {  
  const todos = currTodos;
  return (
    <div className='todos-list'>
      {todos.map((item, i) => {
        return <Todo text = {item} key = {i}/>
      })}
    </div>
  )
}
