import React from 'react'
import back from './img/back.png'
import './modal.css'
export default function MoveBack(props) {
  const {onMoveBack} = props
  return (
    <div onClick={onMoveBack} className="main__moveback edit">
        <img src={back} alt="" />
        <p>Move Back To To Do</p>
    </div>
  )
}
