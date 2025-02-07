import { create } from 'zustand';
import { Task } from '../types/taskTypes';

type TaskStore = {
  tasks: Task[];
  addTask: (text: string, parentId?: number) => void;
  toggleComplete: (id: number, parentId?: number) => void;
  deleteTask: (id: number, parentId?: number) => void;
  editTask: (id: number, text: string, parentId?: number) => void;
  addSubtask: (subtask: Task) => void;
  editedTask: Task | null;
  isEditing: boolean;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
  toggleComplete: (id: number) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  },
  deleteTask: (id: number) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  editTask: (id: number, text: string) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, text } : task
      ),
    }));
  },
  addSubtask: (subtask: Task) => {
    set((state) => ({
      tasks: [...state.tasks, subtask],
    }));
  },
  editedTask: null,
  isEditing: false,
}));
