import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTodos, addTodos, deleteTodos, editTodos } from "../server-request"
import { AccountInfo } from "./modules/accountInfo"
import { TodoInput } from "./modules/todo-input"
import { TodoTable } from "./modules/todo-table"

import "./todos.scss"

export function Todos() {
  const [todos, setTodos] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getButton()
    if(localStorage.getItem('userID') === null){
      navigate("/login")
    }
  }, [])

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
      date: "2022-10-18",
      user_id: localStorage.getItem('userID')
  }
    editTodos(newTodo, id).then(getButton)
  }

  return (
    <div className="main">
      <TodoInput onAdd={addButton}/>
      <TodoTable todos={todos} onDelete={deleteButton} onEdit={editbutton}/>
      <AccountInfo/>
    </div>
  )
}