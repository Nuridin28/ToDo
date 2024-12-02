import React from 'react'
import Container from '../Container'
import Title from './Title';
import './Main.css'
import TodoList from './Todos/TodoList';

export default function Main(props) {
  const {activeBtn, todos, setTodos} = props;
  return (
    <section className="main">
      <Container>
        <Title activeBtn = {activeBtn} />
        <div className="divider"></div>
        <TodoList todos={todos} setTodos={setTodos} activeBtn={activeBtn} />
      </Container>
    </section>
  )
}
