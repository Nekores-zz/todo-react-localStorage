import React, { useEffect, useState } from "react"
import { TodoForm, TodoList } from "../../components/index.js"
import { TodoWrapperStyle } from "./TodoStyle"

export default function Todo() {
  var today = new Date()
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
  var time = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
  var currentDate = date + " " + time
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
    const data = [...todolist]
    data[index].name = value
    data[index].date = currentDate

    setTodolist(data)
    setIsUpdate(false)
    saveData(data)
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
