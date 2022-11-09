import { todoCheck } from '../../helpers/todo-check'

export const TodoInput = ({ onAdd }) => {
  const readInput = () => {
    let inputValue = document.getElementById('searchTxt').value
    const todo = {
      text: inputValue,
      date: '2022-10-18',
      user_id: localStorage.getItem('userID'),
    }
    if (todoCheck(inputValue)) {
      onAdd(todo)
      document.getElementById('searchTxt').value = ''
    } else {
      return
    }
  }

  return (
    <div className="TodoInput">
      <input
        type="add"
        className="TodoInput__text"
        id="searchTxt"
        placeholder="Todo name"
      />
      <button className="TodoInput__button" onClick={() => readInput()}>
        Add to list
      </button>
    </div>
  )
}
