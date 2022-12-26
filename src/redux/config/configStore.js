// import { combineReducers, createStore } from "redux";
// import todos from "../modules/todos";
// // 1. rootReducer을 만들 것이다
// const rootReducer = combineReducers({ todos });
// // 2. 이것을 이용해서 store을 만들것이다.(main)
// const store = createStore(rootReducer);
// // 3. export해서 다른 파일에서 import 할 수 있도록 한다.

// 툴킷
import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";
const store = configureStore({
  reducer: { todos: todos },
});

export default store;
