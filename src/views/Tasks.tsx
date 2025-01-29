import TaskItem from '../components/TaskItem';
import { useTasks } from '../hooks/TaskHooks';

const Tasks = () => {
  const { tasks, newTask, setNewTask, addTask, toggleComplete } = useTasks();

  return (
    <div className="flex flex-col w-screen h-screen dark:bg-gray-900">
      <div className="flex p-4">
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
      <div className="flex w-full p-4 justify-center fixed bottom-0 dark:bg-gray-800">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="w-full dark:bg-gray-700 p-2 rounded"
        />
        <button
          onClick={addTask}
          className="cursor-pointer ml-2 w-20 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
