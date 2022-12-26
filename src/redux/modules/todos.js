import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    initTodo: (state, action) => {
      // action.payload에는 jason 서버의 todos가 담겨있음
      return (state = action.payload);
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { initTodo } = todos.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todos.reducer;

// 만약 리덕스를 사용하면 삭제나 수정을 요청하면, 내가 수동으로 프론트에서 들고있는 데이터를 삭제하고 다시 useSTate에 넣고 리랜더링을 시켜야함
