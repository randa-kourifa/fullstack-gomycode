import { configureStore, createSlice } from "@reduxjs/toolkit";
// const tasks = [
//   {
//     id: 1,
//     title: "task 1",
//     desc: "description 1",
//     isDone: true,
//   },
//   {
//     id: 2,
//     title: "task 2",
//     desc: "description 2",
//     isDone: false,
//   },
// ];
const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
const todoSlice = createSlice({
  name: "todos",
  initialState: tasks,
  reducers: {
    addToDo: (state, action) => {
      localStorage.setItem("tasks", JSON.stringify([...state, action.payload]));
      return (state = [...state, action.payload]);
    },
    deleteTodo: (state, action) => {
      return (state = state.filter((task) => task.id !== action.payload));
    },

    updatetodo: (state, action) => {
      state = state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
      console.log(state);
      return state;
    },
  },
});
export const { addToDo, deleteTodo, updatetodo } = todoSlice.actions;
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
