import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addTask, fetchTasks, deleteTask } from "../redux/tasksOps";
import { selectTextFilter } from "../redux/filterSlice";
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        state.error = false;
      })
      .addCase(addTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
        state.error = false;
      })
      .addCase(deleteTask.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default tasksSlice.reducer;
export const selectTasks = (state) => state.tasks.items;
export const selectLoading = (state) => state.tasks.loading;
export const selectError = (state) => state.tasks.error;

export const visibleTasks = createSelector(
  [selectTasks, selectTextFilter],
  (tasks, filter) => {
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const tasksCount = createSelector([selectTasks], (tasks) => {
  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        task.active += 1;
      }
    },
    { active: 0, completed: 0 }
  );
});
