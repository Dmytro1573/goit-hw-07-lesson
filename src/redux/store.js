import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../redux/tasksSlice";
import filterReducer from "../redux/filterSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
  },
});
