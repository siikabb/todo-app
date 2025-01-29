import { Task, TaskItemProps } from '../types/taskTypes';

const TaskItem = ({ task, toggleComplete }: TaskItemProps) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            marginLeft: '8px',
          }}
        >
          {task.text}
        </span>
      </li>
    </>
  );
};

export default TaskItem;
