import React from 'react'
import Title from './Title'
import Container from '../Container'
import Menu from './Menu/Menu'
import './Header.css'
export default function Header(props) {
  const {activeBtn, setActiveBtn, todos, setTodos, filteredTodos, setFilteredTodos} = props;
  return (
    <section className="header">
        <Container>
            <Title/>
            <Menu activeBtn = {activeBtn} setActiveBtn = {setActiveBtn} todos={todos} setTodos = {setTodos} filteredTodos = {filteredTodos} setFilteredTodos = {setFilteredTodos}/>
        </Container>
    </section>
  )
}
