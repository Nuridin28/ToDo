import React from 'react'

export default function PagerBtn(props) {
  const {text, className, toggleActive} = props;
  const {activeBtn, setActiveBtn} = props;
  function handleClick(e) {
    toggleActive(e)
    setActiveBtn(text);
  }
  return (
    <button onClick = {handleClick} className={`pager__btn ${className}`}>
        {text}
    </button>
  )
}
