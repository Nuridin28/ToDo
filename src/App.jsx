import './App.css'
import Container from './components/Container'
import Header from './components/Header/Header'
import Todos from './components/Todos/Todos'
import React, { Component } from 'react';
import todos from './data/todos';

let data = todos;


const getTodos = (todos, status) => {
  let temp = [];
  todos.forEach(todo => {
    if(todo.status == (status || 'ToDo')) {
      temp.push(todo.text)
    }
  });
  return temp;
}

class App extends Component {
  state = {
    focusedBtn: 'ToDo',
    curTodos : getTodos(data)
  }
  changeFocusedBtn = (btn) => {
    this.setState({focusedBtn:btn})
  }
  render() {
    return (
      <>
        <Container>
          <Header focusedBtn = {this.state.focusedBtn} getTodos = {getTodos} changeFocusedBtn = {this.changeFocusedBtn}/>
          <Todos currTodos = {this.state.curTodos} currBtn = {this.state.focusedBtn} />
        </Container>
    </>
    );
  }
}

export default App;
