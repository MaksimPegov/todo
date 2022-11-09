import { useState } from 'react'
import { todoCheck } from '../../helpers/todo-check'

export const TodoRow = ({ todo, onDelete, onEdit }) => {
  let inputValue

  const [edit, setEdit] = useState(false)
  const editing = () => {
    setEdit((status) => !status)
  }

  const changeFlag = () => {
    if (!edit) {
      editing()
      return
    }
    inputValue = document.getElementById(`input${todo.id}`).value
    if (todoCheck(inputValue)) {
      onEdit(todo.id, inputValue)
      editing()
    }
  }

  return (
    <div className="TodoRow">
      <button className="TodoRow__delete" onClick={() => onDelete(todo.id)}>
        Done
      </button>
      {!edit ? (
        <div className="TodoRow__text">{todo.text}</div>
      ) : (
        <input
          type="edit"
          id={`input${todo.id}`}
          placeholder="New todo name"
          defaultValue={todo.text}
        />
      )}
      <button className="TodoRow__edit" onClick={changeFlag}>
        {!edit ? 'Edit' : 'Save'}
      </button>
    </div>
  )
}
