import { tasksCount } from "../../redux/tasksSlice.js";
import { useSelector } from "react-redux";

export default function TaskCounter() {
  const tasks = useSelector(tasksCount);
  return (
    <>
      <div>Task counter</div>| <span>Active:{tasks.active}</span>|
      <span>Completed:{tasks.completed}</span>
    </>
  );
}
