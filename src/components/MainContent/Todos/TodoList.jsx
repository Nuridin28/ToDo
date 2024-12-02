import React from 'react';
import Todo from './Todo';
import './Todos.css';

export default function TodoList(props) {
  const { todos, setTodos, activeBtn} = props;
  return (
    <ul className="todos">
      {todos.map((todo, index) => (
        <Todo 
          key={index} 
          text={todo.text} 
          setTodos={setTodos} 
          todos={todos} 
          activeBtn={activeBtn}
          style={{ textDecoration: todo.status === 'Done' ? 'line-through' : 'none' }} 
        />
      ))}
    </ul>
  );
}
