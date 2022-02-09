import styled from "styled-components"

export const FormStyle = styled.form`
  display: flex;
  div {
    width: 100%;
    input {
    width: 71%;
    padding: 12px;
    border: none;
    outline: none;
    border: 1px solid #c9c9c9;
    border-radius: 4px;
    font-size: 20px;
}
    }
    button {
      background-color: #333;
      color: white;
      text-transform: capitalize;
      font-size: 15px;
      border: none;
      border-radius: 4px;
      margin-left: 5px;
      padding: 8px 34px;
      cursor: pointer;
      -webkit-transition: 0.2s all ease-in-out;
      -webkit-transition: 0.2s all ease-in-out;
      transition: 0.2s all ease-in-out;
      border: 1px solid black;
      height: 47px;
      &:hover {
        background-color: black;
      }
    }
  }
`
