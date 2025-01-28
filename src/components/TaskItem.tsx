import { Task } from '../types/taskTypes';

const TaskItem = (task: Task) => {
  return (
    <>
      <li>
        <input type="checkbox" checked={task.completed} />
        <p>{task.text}</p>
      </li>
    </>
  );
};

export default TaskItem;
