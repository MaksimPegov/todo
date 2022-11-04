import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTodos, addTodos, deleteTodos, editTodos } from "../server-request"
import { TodoInput } from "./todo-input"
import { TodoTable } from "./todo-table"
import "./todos.scss"

export function Todos() {
  const [todos, setTodos] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getButton()
    if(localStorage.getItem('userId') === null){
      navigate("/login")
    }
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
      <button onClick={() =>{
        navigate("/login")
        localStorage.clear()
      }}>Log out</button>
    </div>
  )
}