import TaskItem from '../components/TaskItem';
import { useTasks } from '../hooks/TaskHooks';

const Tasks = () => {
  const { tasks, newTask, setNewTask, addTask, toggleComplete } = useTasks();

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} />
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default Tasks;
