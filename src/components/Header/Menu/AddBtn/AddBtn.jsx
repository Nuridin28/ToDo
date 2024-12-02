import React, { useState } from 'react'
import plus from './img/plus.png'
import './AddBtn.css'
import Modal from '../Modal/Modal'
export default function AddBtn(props) {
  const {todos, setTodos, filteredTodos, setFilteredTodos} = props
  const [isModal, setIsModal] = useState(false);
  function toggleModal() {
    setIsModal((prevIsModal) => !prevIsModal);
  }
  return (
    <div className="pager__add-section">
      {isModal && <Modal todos={todos} setTodos = {setTodos}/>}
      <button onClick={toggleModal} className='pager__add-btn'>
        <img src={plus} alt="plus" />
      </button>
    </div>
  )
}
