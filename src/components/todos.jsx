import { useEffect, useState } from "react"
import { getTodos, addTodos, deleteTodos, editTodos } from "../server-request"
import { TodoInput } from "./todo-input"
import { TodoTable } from "./todo-table"
import "./todos.scss"

export function Todos({logChange}) {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getButton()
  }, [])

  const getButton = () => {
    getTodos().then((todos) => {
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
      user_id: 1
  }
    editTodos(newTodo, id).then(getButton)
  }

  return (
    <div className="main">
      <TodoInput onAdd={addButton}/>
      <TodoTable todos={todos} onDelete={deleteButton} onEdit={editbutton}/>
      <button onClick={logChange}>Log out</button>
    </div>
  )
}