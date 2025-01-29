import { useState } from 'react';
import { Task } from '../types/taskTypes';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask;
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, newTask, setNewTask, addTask, toggleComplete };
};

export { useTasks };
