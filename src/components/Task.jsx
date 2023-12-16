import { FaTrashArrowUp, FaPenClip, FaFile } from 'react-icons/fa6';
import { useTodos } from '../contexts/TodoContext';

function Task({ task: { task, completed, id } }) {
  const { deleteTask } = useTodos();
  return (
    <div className='flex items-center space-x-2 p-3 rounded-xl bg-gray-200  shadow-lg'>
      <div className='flex flex-1 items-center space-x-2'>
        <input type='checkbox' checked={completed} className='rounded-sm' />
        <p
          className={`flex-1 bg-transparent p-1 font-semibold whitespace-pre-wrap `}
        >
          {task}
        </p>
        <FaTrashArrowUp className='text-red-700' onClick={() => deleteTask(id)} />
      </div>
    </div>
  );
}

export default Task;
