type Task = {
  id: number;
  text: string;
  completed: boolean;
  tags?: string[];
};

// will be expanded later, made already so code doesn't need to be modified later
type TaskItemProps = {
  task: Task;
  toggleComplete: (id: number) => void;
  index: number;
};

export type { Task, TaskItemProps };
