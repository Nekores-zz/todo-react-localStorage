import React, { useEffect, useState } from "react"
import { TodoForm, TodoList } from "../../components/index.js"
import { TodoWrapperStyle } from "./TodoStyle"

export default function Todo() {
  const currentDate = new Date().toLocaleString().split(",")[0]
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [todolist, setTodolist] = useState([])

  const addTodoItem = (e) => {
    e.preventDefault()
    let inputValue = value

    let obj = {
      name: inputValue,
      id: "1",
      date: currentDate,
    }

    if (value) {
      const data = [...todolist]
      const todoItems = [...data, obj]
      setTodolist(todoItems)
      setError(false)
      saveData(todoItems)
      setValue("")
    } else {
      setError(true)
    }
  }

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const deleteTodo = (index, todo) => () => {
    const todos = [...todolist]
    todos.splice(index, 1)
    setTodolist(todos)
    saveData(todos)
  }

  const updateTodo = (index) => () => {
    const tt = [...todolist]
    tt[index].name = value
    tt[index].date = currentDate

    setTodolist(tt)
    setIsUpdate(false)
    saveData(tt)
    setValue("")
  }
  const editTodo = (index, todo) => () => {
    setIsUpdate(index)
    setValue(todo.name)
  }
  const saveData = (todo) => {
    localStorage.setItem("todos", JSON.stringify(todo))
  }

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodolist(JSON.parse(localStorage.getItem("todos")))
    }
  }, [])

  return (
    <TodoWrapperStyle>
      <TodoForm
        addTodoItem={addTodoItem}
        isUpdate={isUpdate}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <p className="errorMessage">You cant add empty name todo item</p>
      ) : null}

      <TodoList
        todolist={todolist}
        isUpdate={isUpdate}
        value={value}
        onChange={onChange}
        editTodo={editTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </TodoWrapperStyle>
  )
}
