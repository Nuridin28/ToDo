import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Main from './components/MainContent/Main'
import Footer from './components/Footer/Footer'

export default function App() {
  const [activeBtn, setActiveBtn] = useState('To Do')
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    setFilteredTodos(todos.filter((todo) => todo.status === activeBtn)) 
  }, [todos, activeBtn])

  return (
    <>
      <Header 
        activeBtn={activeBtn} 
        setActiveBtn={setActiveBtn} 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos} 
        setFilteredTodos={setFilteredTodos} 
      />
      <Main 
        activeBtn={activeBtn} 
        todos={filteredTodos} 
        setTodos={setTodos} 
      />
      <Footer />
    </>
  )
}
