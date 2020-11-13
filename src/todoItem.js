import {UpdateInput, Button, TodoItemBody, TodoText, InputCheckbox} from './styledComponent';
import { useState, useEffect, useRef } from "react";

export function TodoItem({
  todo, 
  handleDeleteTodo, 
  handleToggleTodo,
  handleChangeTextToInput,
}) {
  const handleDeleteClick = () => {
    return handleDeleteTodo(todo.id)
  }

  const handleToggleClick =() => {
    return handleToggleTodo(todo.id)
  }

  const handleChangeToInputClick =() => {
    return handleChangeTextToInput(todo.id)
  }

  return (
    <TodoItemBody isDone={todo.isDone}>
    <TodoText id={todo.id} isDone={todo.isDone} onClick={handleChangeToInputClick} >{todo.content}</TodoText>
    <div>
      <InputCheckbox type="checkbox" onInput={handleToggleClick} checked={todo.isDone? true : false}/>
      <Button onClick={handleDeleteClick}> delete</Button>
    </div>
    </TodoItemBody>
  )
}


export function TodoItemUpdate({
  todo,
  todos,
  handleDeleteTodo, 
  handleToggleTodo,
  handleUpdateTodoContent,
  handleEscapeInput
}) {
  const handleDeleteClick = () => {
    return handleDeleteTodo(todo.id)
  }

  const handleToggleClick =() => {
    return handleToggleTodo(todo.id)
  }

  const handleUptateTodoContentClick = (e) => {
    if(!e.target.value) return
    return handleUpdateTodoContent(e)
  }

  return (
    <TodoItemBody isDone={todo.isDone}>
    <UpdateInput onKeyPress={handleUptateTodoContentClick} id={todo.id} placeholder={todo.content}/>
    <div>
      <InputCheckbox type="checkbox" onInput={handleToggleClick} checked={todo.isDone? true : false}/>
      <Button onClick={handleDeleteClick}> delete</Button>
    </div>
    </TodoItemBody>
  )
}