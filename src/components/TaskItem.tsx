import { useState } from 'react';
import { TaskItemProps } from '../types/taskTypes';
import { useTaskStore } from '../stores/TaskStore';

const TaskItem = ({
  task,
  index,
  toggleComplete,
  deleteTask,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const { editTask, addSubtask, tasks } = useTaskStore();

  const handleEditTask = () => {
    setIsEditing(true);
  };

  return (
    <>
      <li
        className={`${
          index % 2 === 0
            ? 'bg-gray-100 dark:bg-gray-900'
            : 'bg-gray-200 dark:bg-gray-800'
        } flex w-full`}
      >
        <span className={`flex w-full${isEditing ? ' hidden' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="cursor-pointer m-auto ml-2"
          />
          <span
            className={`p-2 ${
              task.completed ? 'line-through text-gray-500' : ''
            }
          flex-1 cursor-pointer`}
            onClick={() => toggleComplete(task.id)}
          >
            {task.text}
          </span>
          <button
            onClick={(e) => {
              //implement subtask logic here
              console.log('subtask');
              e.preventDefault();
              addSubtask({
                id: Date.now(),
                text: '',
                completed: false,
                parentId: task.id,
              });
            }}
            className="flex text-white rounded cursor-pointer size-6 items-center justify-center m-auto mr-2 bg-green-500"
          >
            +
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleEditTask();
            }}
            className="flex text-white rounded cursor-pointer size-6 items-center justify-center m-auto mr-2 bg-blue-500"
          >
            ✎
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              deleteTask(task.id);
            }}
            className="flex ml-auto bg-red-500 text-white rounded cursor-pointer size-6 items-center justify-center m-auto mr-2"
          >
            🗙
          </button>
        </span>
        <input
          type="text"
          className={`w-full p-2
        ${isEditing ? 'block' : 'hidden'}`}
          value={task.text}
          onChange={(e) => editTask(task.id, e.target.value)}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setIsEditing(false);
            }
          }}
        />
      </li>
      <ul className="flex flex-col w-full pl-4">
        {
          // map all tasks with parentId equal to current task's id
          tasks
            .filter((t) => t.parentId === task.id)
            .map((subtask, index) => (
              <TaskItem
                key={subtask.id}
                task={subtask}
                index={index}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            ))
        }
      </ul>
    </>
  );
};

export default TaskItem;
