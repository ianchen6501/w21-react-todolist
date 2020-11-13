import './App.css';
import { useState, useEffect, useRef } from "react";
import {Nav, TodoWrapper, TodoTitle, TodoInput, Input, Button, TodoContent, TodoItemBody, TodoText, InputCheckbox, Select} from './styledComponent'
import { TodoItem, TodoItemUpdate } from './todoItem'
import { Component } from 'react';
import { cleanup } from '@testing-library/react';

function App() {
  const id = useRef(1)
  const [mode, setMode] = useState("All")

  const [todos, setTodos] = useState(() => {
    let todoData = window.localStorage.getItem('todos')
    if (todoData) {
      todoData = JSON.parse(todoData)
      id.current = todoData[todoData.length - 1].id + 1
    } else {
      todoData = []
    }
    return todoData
  })

  const handleAddTodos =(e) => {
    if(!e.target.value) return
    if(e.charCode == 13) {
      setTodos([...todos, {
        id: id.current,
        content: e.target.value,
        isDone: false,
        updateMode: false,
      }])
      id.current++
      e.target.value = ""
      return
    }
    return
  }

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter(
        todo => todo.id !== id
      )
    )
  }

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id !== id ) return todo
      return {
        ...todo, 
        isDone: !todo.isDone
      }
    }))
  }

  const handleChangeMode = (e) => {
    setMode(e.target.value)
  }

  const handleChangeTextToInput = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id !== id ) return todo
      return {
        ...todo, 
        updateMode: true
      }
    }))
  }

  const handleUpdateTodoContent = (e) => {
    if(e.charCode == 13) {
      const id = e.target.getAttribute('id')
      const value = e.target.value
      setTodos(todos.map(todo => {
        if(todo.id != id) return todo
        return {
          ...todo,
          content: value,
          updateMode: false
        }
      }))
    }
  }

  const handleEscapeInput = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id != id) return todo
      return {
        ...todo,
        updateMode: false
      }
    }))
  }

  function handleTodoItem (todo) {
    if(!todo.updateMode) {
      return (
        <TodoItem key={todo.id} todo={todo} todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} handleChangeTextToInput={handleChangeTextToInput} handleUpdateTodoContent={handleUpdateTodoContent} handleEscapeInput={handleEscapeInput}/>
      )
    } else {
      return (
        <TodoItemUpdate key={todo.id} todo={todo} todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} handleChangeTextToInput={handleChangeTextToInput} handleUpdateTodoContent={handleUpdateTodoContent} handleEscapeInput={handleEscapeInput}/>
      )
    }
  }

  return (
    <div>
      <Nav>React Todo List</Nav>
      <TodoWrapper>
        <TodoTitle></TodoTitle>
        <TodoInput>
          <Input placeholder=" + type your list" onKeyPress={handleAddTodos}></Input>
        </TodoInput>
        <TodoContent>
          {mode === "All" && 
            todos.map(todo => handleTodoItem(todo)
            )
          }
          {mode === "Uncompleted" && 
            todos.map(todo => !todo.isDone && handleTodoItem(todo)
            )
          }
          {mode === "Completed" && 
            todos.map(todo => todo.isDone && handleTodoItem(todo)
            )
          }
        </TodoContent>
        <Select onChange={handleChangeMode}>
          <option>All</option>
          <option>Uncompleted</option>
          <option>Completed</option>
        </Select>
      </TodoWrapper>
    </div>
  )
}

export default App;
