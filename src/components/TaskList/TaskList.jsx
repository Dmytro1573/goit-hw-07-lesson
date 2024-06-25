import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { visibleTasks } from "../../redux/tasksSlice";

export default function TaskList() {
  const tasks = useSelector(visibleTasks);

  return (
    <>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
