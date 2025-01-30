import { Task, TaskItemProps } from '../types/taskTypes';

const TaskItem = ({ task, toggleComplete, index }: TaskItemProps) => {
  return (
    <>
      <li
        onClick={() => toggleComplete(task.id)}
        className={`${
          index % 2 === 0
            ? 'bg-gray-100 dark:bg-gray-900'
            : 'bg-gray-200 dark:bg-gray-800'
        } p-2 cursor-pointer`}
      >
        <input
          type="checkbox"
          checked={task.completed}
          // onChange={() => toggleComplete(task.id)}
          className="cursor-pointer"
        />
        <span
          className={`ml-2 ${
            task.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {task.text}
        </span>
      </li>
    </>
  );
};

export default TaskItem;
