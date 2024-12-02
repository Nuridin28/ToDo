import React, { useState } from 'react'
import PagerBtn from './PagerBtn'
import './Pager.css'


export default function Pager(props) {
  const {activeBtn, setActiveBtn, filteredTodos, setFilteredTodos} = props;
  function toggleActive(e) {
    const pagerBtns = document.querySelectorAll('.pager__btn');
    pagerBtns.forEach((btn) => {
      btn.className = 'pager__btn';
    })
    e.target.className = 'pager__btn active-btn'
  }
  return (
    <div className="pager">
        <PagerBtn text = 'To Do' toggleActive = {toggleActive} className = {'active-btn'} activeBtn = {activeBtn} setActiveBtn = {setActiveBtn}/>
        <PagerBtn text = 'Done'toggleActive = {toggleActive} activeBtn = {activeBtn} setActiveBtn = {setActiveBtn}/>
        <PagerBtn text = 'Trash' toggleActive = {toggleActive} activeBtn = {activeBtn} setActiveBtn = {setActiveBtn}/>
    </div>
  )
}
