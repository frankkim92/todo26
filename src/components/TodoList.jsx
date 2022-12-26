import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { initTodo } from "../redux/modules/todos";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import styled from "styled-components";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // 배열이 없으면 렌더링 할 떄마다 useEffect가 실행이 됨
  // 배열이[] 있으면 랜더링이 될 때 [] 안에 있는 게 실행됨
  const getAxios = useCallback(() => {
    axios
      .get("http://localhost:3001/todos")
      .then((response) => dispatch(initTodo(response.data)))
      .catch((error) => console.log(error));
  }, [dispatch]);

  useEffect(() => {
    getAxios();
  }, [getAxios]);
  // 여기서 data는 id:nanoid()todoTitle: title,
  // isDone: false,
  // 객체 하나를 받아온다.
  const addTodo = (data) => {
    // 두번째 인자에 데이터를 넣어야함
    axios
      .post("http://localhost:3001/todos", data)
      // 투두 추가한거 보내고, 업데이트 후 다시 받아와야함
      .then(() => getAxios())
      .catch((error) => console.log(error));
  };

  // 내가 삭제하려는 todo의 id와 서버에 있는 todo의 id가 같아야함
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      // 투두 삭제한거 보내고, 업데이트 후 다시 받아와야함
      .then(() => getAxios())
      .catch((error) => console.log(error));
  };

  const editTodo = (id, data) => {
    axios
      .patch(`http://localhost:3001/todos/${id}`, data)
      // 투두 업데이트한거 보내고, 업데이트 후 다시 받아와야함
      .then(() => getAxios())
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Input addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
