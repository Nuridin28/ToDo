import React from 'react'

export default function Title(props) {
  const {name} = props;
  return (
    <div className='todo-title'>{name}</div>
  )
}
