import { useState } from "react"

export function TodoRow ({todo, onDelete, onEdit}) {
  let inputValue

  const [edit, setEdit] = useState(false)
  const editing = () => {
    setEdit(status => !status)
  } 
  
  function changeFlag (){
    if(!edit){
      editing()
      return 
    }

    
    inputValue = document.getElementById(`input${todo.id}`).value

    if(inputValue === ''){
      alert("Please name your todo!")
      
      return
    } else if(inputValue.length > 30){
      alert("Your needs to be less than 30 characters!")

      return
    }
    onEdit(todo.id, inputValue)
    editing()
  }

  return (
    <div className="TodoRow">
      <button className="TodoRow__delete" onClick={() => onDelete(todo.id)}>Done</button>
      {!edit ? 
        <div className="TodoRow__text">{todo.text}</div> 
      :
      <input 
        type="edit" 
        id={`input${todo.id}`} 
        placeholder="New todo name" 
        defaultValue={todo.text}
      />
      }
      <button className="TodoRow__edit" onClick={changeFlag}>{!edit?"Edit":"Save"}</button>
      
    </div>
  )
}