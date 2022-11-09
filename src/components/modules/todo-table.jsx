import { TodoRow } from './todo-row'

export const TodoTable = ({ todos, onDelete, onEdit }) => {
  return (
    <div className="TodoTable">
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <TodoRow key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
        ))
      ) : (
        <div className="TodoTable__empty">No todos yet!</div>
      )}
    </div>
  )
}
