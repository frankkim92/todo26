import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import TodoList from "../components/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="detail/:ippp" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
