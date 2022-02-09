import styled from "styled-components"

export const TodoListStyle = styled.ul`
  list-style-type: none;
  padding: 10px;
  background: #efefef;
  border-radius: 4px;
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: white;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    span.date{
      background-color: #333;
      color: white;
      padding: 5px 10px;
      margin-right: 5px;
      border-radius: 20px;
    }
    input {
      padding: 8px;
      width: 64%;
      border: 1px solid #c9c9c9;
      border-radius: 4px;
    }
    .action-button-group {
      button {
        background-color: #333;
        color: white;
        text-transform: capitalize;
        font-size: 15px;
        border: none;
        border-radius: 4px;
        margin-left: 5px;
        padding: 10px 12px;
        cursor: pointer;
        transition: 0.2s all ease-in-out;
        &:hover {
          background-color: black;
        }
      }
      .warning {
        background-color: green;
      }
      .danger {
        background-color: red;
      }
    }
  }
  .defaultInfo {
    font-size: 20px;
    text-align: center;
  }
`
