import { useEffect, useState } from 'react';
import { Task } from '../types/taskTypes';
import { useTaskStore } from '../stores/TaskStore';
// import { useTasks } from '../hooks/TaskHooks';

const EditModal = (props: { task: Task | null; isEditing: boolean }) => {
  if (!props.task) return null;

  const [taskText, setTaskText] = useState(props.task.text);
  const [display, setDisplay] = useState('hidden');

  useEffect(() => {
    if (props.isEditing) {
      setDisplay('block');
    } else {
      setDisplay('hidden');
    }
  }, [props.isEditing]);

  // const [isEditing, setIsEditing] = useState(props.isEditing);
  let isEditing = props.isEditing;

  const { editTask } = useTaskStore();

  const handleEditTask = () => {
    if (!taskText.trim()) return;
    console.log(taskText);
    // setIsEditing(false);
    if (!props.task) return;
    editTask(props.task.id, taskText);
    setDisplay('hidden');
    setTaskText('');
  };

  console.log(isEditing);

  return (
    <div
      className={
        'flex flex-col items-center bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-50' +
        (display === 'hidden' ? ' hidden' : '')
      }
    >
      <input
        type="text"
        className="w-300 p-2 rounded"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        onClick={handleEditTask}
        className="bg-blue-500 text-white rounded p-2 cursor-pointer mt-2"
      >
        ✎
      </button>
    </div>
  );
};

export default EditModal;
