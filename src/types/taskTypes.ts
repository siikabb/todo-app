type Task = {
  id: number;
  text: string;
  completed: boolean;
  tags?: string[];
  parentId?: number;
};

type TaskItemProps = {
  task: Task;
  toggleComplete: (id: number) => void;
  index: number;
  deleteTask: (id: number) => void;
  editTask?: (id: number, text: string) => void;
};

export type { Task, TaskItemProps };
