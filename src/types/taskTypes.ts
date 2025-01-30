type Task = {
  id: number;
  text: string;
  completed: boolean;
  tags?: string[];
};

type TaskItemProps = {
  task: Task;
  toggleComplete: (id: number) => void;
  index: number;
  deleteTask: (id: number) => void;
};

export type { Task, TaskItemProps };
