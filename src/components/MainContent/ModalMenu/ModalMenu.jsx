import React from 'react'
import Delete from './Delete'
import MoveBack from './MoveBack'
import './modal.css'

export default function ModalMenu(props) {
  const {activeBtn, onDelete, onMoveBack} = props
  return (
    <div className="main__menu">
        <Delete onDelete={onDelete} activeBtn={activeBtn} />
        {activeBtn != 'To Do' ? <MoveBack onMoveBack={onMoveBack}/> : ''}
    </div>
  )
}
