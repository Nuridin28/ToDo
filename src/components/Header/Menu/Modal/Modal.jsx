import React, { useState } from 'react'
import './Modal.css'

function addTodo(newTodo, setTodos, todos){
  setTodos([newTodo, ...todos])
}

export default function Modal(props) {
  const handleAddTodo = () => {
    if (input.trim()) {
      const todo = {
        text:input,
        status:'To Do'
      }
      addTodo(todo, setTodos, todos); 
      setInput(''); 
    }
  };
  const [input, setInput] = useState('')
  const {todos, setTodos} = props
  return (
    <div className="modal">
        <div className="modal__title">
            Add New To Do
        </div>
        <textarea onChange={(e) => {
          setInput(e.target.value)
        }} type="text" className="modal__input" placeholder='Your text' value ={input}/>
        <button onClick={handleAddTodo} className="modal__btn">Add</button>
    </div>
  )
}
