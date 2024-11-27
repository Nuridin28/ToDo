import React from 'react'
import add from './img/add.svg'
import './header.css'

export default function AddButton(props) {
  const {handleClick} = props;
  return (
    <div>
        <button className='add-btn'><img src={add} alt="" onClick={() => handleClick()}/></button>
    </div>
  )
}
