import Loader from "../Loader/Loader";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import Error from "../Error/Error";
import FilterText from "../FilterText/FilterText.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/tasksOps.js";
import { selectLoading, selectError } from "../../redux/tasksSlice.js";
import TaskCounter from "../TaskCounter/TaskCounter.jsx";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>HTTP with Redux</h1>
        <TaskCounter />
        <TaskForm />
        <FilterText />
        {isLoading && <Loader>Loading message</Loader>}
        {isError && <Error>Error message</Error>}
        <TaskList />
      </div>
    </>
  );
}
