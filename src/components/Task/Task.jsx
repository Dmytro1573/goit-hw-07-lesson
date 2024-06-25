import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksOps.js";

export default function TaskFor({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      <p>{task.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
