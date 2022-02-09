import { TodoListStyle } from "./TodoListStyle"

function TodoList({
  todolist,
  isUpdate,
  value,
  onChange,
  editTodo,
  updateTodo,
  deleteTodo,
}) {
  return (
    <TodoListStyle>
      {todolist.length
        ? todolist.map((todo, index) => (
            <li>
              {isUpdate === index ? (
                <input value={value} onChange={onChange} />
              ) : (
                <>
                  {todo.date} - {todo.name}
                </>
              )}
              <div className="action-button-group">
                {isUpdate === index ? (
                  <button onClick={updateTodo(index, todo)} className="warning"> Update</button>
                ) : (
                  <button onClick={editTodo(index, todo)} className="warning"> edit</button>
                )}
                <button onClick={deleteTodo(index, todo)} className="danger"> delete</button>
              </div>
            </li>
          ))
        : <p className="defaultInfo"> No todo items</p>}
    </TodoListStyle>
  )
}
export default TodoList
