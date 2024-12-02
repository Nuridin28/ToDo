import React from 'react'

export default function Title(props) {
  const {activeBtn} = props;
  return (
    <p className='main__title'>{activeBtn}</p>
  )
}
