import { TaskItemProps } from '../types/taskTypes';

const TaskItem = ({
  task,
  index,
  toggleComplete,
  deleteTask,
}: TaskItemProps) => {
  return (
    <>
      <li
        className={`${
          index % 2 === 0
            ? 'bg-gray-100 dark:bg-gray-900'
            : 'bg-gray-200 dark:bg-gray-800'
        } flex w-full`}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="cursor-pointer m-auto ml-2"
        />
        <span
          className={`p-2 ${task.completed ? 'line-through text-gray-500' : ''}
          flex-1 cursor-pointer`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.text}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteTask(task.id);
          }}
          className="flex ml-auto bg-red-500 text-white rounded cursor-pointer size-6 m-auto mr-2"
        >
          x
        </button>
      </li>
    </>
  );
};

export default TaskItem;
