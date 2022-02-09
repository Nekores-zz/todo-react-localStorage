import React from "react"
import { FormStyle } from "./TodoFormStyle"

export default function TodoForm({ addTodoItem, isUpdate, value, onChange }) {
  return (
    <FormStyle onSubmit={addTodoItem}>
      <div>
        <input
          type="text"
          name="todoText"
          value={isUpdate !== false ? "" : value}
          onChange={onChange}
        />
        <button type="submit">add item</button>
      </div>
    </FormStyle>
  )
}
