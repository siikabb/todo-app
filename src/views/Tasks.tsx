import { useState } from 'react';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../hooks/TaskHooks';
import { useTaskStore } from '../stores/TaskStore';
import EditModal from '../components/EditModal';

const Tasks = () => {
  // const { tasks, addTask, toggleComplete, deleteTask, editTask } = useTasks([]);
  const { tasks, addTask, toggleComplete, deleteTask, editTask } =
    useTaskStore();

  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (!taskText.trim()) return;
    addTask(taskText);
    setTaskText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen dark:bg-gray-900">
      <div className="flex flex-col w-full">
        <ul>
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              editTask={editTask}
              deleteTask={deleteTask}
              index={index}
            />
          ))}
        </ul>
      </div>
      <div className="flex w-full p-4 justify-center fixed bottom-0 dark:bg-gray-800">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
          className="w-full dark:bg-gray-700 p-2 rounded"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleAddTask}
          className="cursor-pointer ml-2 w-20 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
