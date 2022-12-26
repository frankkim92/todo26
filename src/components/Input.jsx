import React, { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

const Input = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo({
      id: nanoid(),
      todoTitle: title,
      isDone: false,
    });
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledButton>버튼 비활성화</StyledButton>
        <StyledInput
          placeholder="추가할 투두를 적어주세요"
          value={title}
          onChange={onChangeTitle}
        />
        <StyledButton>투두리스트 추가하기</StyledButton>
      </StyledForm>
    </div>
  );
};

export default Input;
const StyledForm = styled.form`
  background-color: #151b29;
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  color: black;
  width: 50%;

  padding: 8px;
`;

const StyledButton = styled.button`
  background: none;
  border-radius: 5px;
  color: orange;
  border: 2px solid;

  /* font-size: 18px; */
  transition: color 0.5s, border-color 0.5s, transform 0.5s;

  &:hover {
    border-color: cornflowerblue;
    border-radius: 5px;
    color: cornflowerblue;
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
