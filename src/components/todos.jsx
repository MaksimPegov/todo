import { useEffect, useState } from 'react'
import { getTodos, addTodos, deleteTodos, editTodos } from '../server-request'
import { AccountInfo } from './modules/accountInfo'
import { TodoInput } from './modules/todo-input'
import { TodoTable } from './modules/todo-table'

import './todos.scss'

export const Todos = ({ log }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getButton()
    if (localStorage.getItem('userID') === null) {
      log(false)
    }
  }, [log])

  const getButton = () => {
    getTodos(localStorage.getItem('userID')).then((todos) => {
      setTodos(todos)
    })
  }

  const addButton = (todo) => {
    addTodos(todo).then(getButton)
  }

  const deleteButton = (id) => {
    deleteTodos(id).then(getButton)
  }

  const editbutton = (id, text) => {
    const newTodo = {
      text: text,
      date: '2022-10-18',
      user_id: localStorage.getItem('userID'),
    }
    editTodos(newTodo, id).then(getButton)
  }

  return (
    <div className="main">
      <TodoInput onAdd={addButton} />
      <TodoTable todos={todos} onDelete={deleteButton} onEdit={editbutton} />
      <AccountInfo logOut={log} />
    </div>
  )
}

