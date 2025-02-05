import { useState } from 'react';
import { Task } from '../types/taskTypes';

const useTasks = (initialTasks: Task[]) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    console.log(tasks);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number, text: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text } : task)));
  };

  return { tasks, addTask, toggleComplete, deleteTask, editTask };
};

export { useTasks };
