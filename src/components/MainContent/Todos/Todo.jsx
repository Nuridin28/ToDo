import React, { useState } from 'react';
import './Todos.css';
import dots from './img/3dots.png';
import ModalMenu from '../ModalMenu/ModalMenu';

export default function Todo(props) {
  const { text, setTodos, todos } = props;
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const handleCheckboxChange = () => {
    setTodos(
      todos.map((todo) =>
        todo.text === text
          ? { ...todo, status: todo.status === 'Done' ? 'To Do' : 'Done' }
          : todo
      )
    );
  };

  const handleDelete = () => {
    setTodos(
      todos.map((todo) =>
        todo.text === text ? { ...todo, status: 'Trash' } : todo
      )
    );
  };

  const handleMoveBack = () => {
    setTodos(
      todos.map((todo) =>
        todo.text === text ? { ...todo, status: 'To Do' } : todo
      )
    );
  };

  const currentTodo = todos.find((todo) => todo.text === text);

  return (
    <div className="todo">
      <img
        onClick={toggleModal}
        src={dots}
        alt="Options"
        style={{ cursor: 'pointer' }}
      />
      <input
        type="checkbox"
        checked={currentTodo?.status === 'Done'}
        onChange={handleCheckboxChange}
      />
      <p
        style={{
          textDecoration: currentTodo?.status === 'Done' ? 'line-through' : 'none',
          color: currentTodo?.status === 'Done' ? '#959595' : 'black',
        }}
      >
        {text}
      </p>
      {isModal && (
        <ModalMenu
          activeBtn={currentTodo?.status}
          onDelete={handleDelete}
          onMoveBack={handleMoveBack}
        />
      )}
    </div>
  );
}
