import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: state.todo.length + 1,
        content: action.payload,
      });
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((it) => it.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
