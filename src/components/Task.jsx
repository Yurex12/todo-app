import { FaTrashArrowUp, FaPenClip, FaFile } from 'react-icons/fa6';
import { useTodos } from '../contexts/TodoContext';
import { useState } from 'react';
import toast from 'react-hot-toast';

function Task({
  task: { task, completed, id, isEditing },
  editingTaskId,
  handleCurrenctlyEditingTask,
}) {
  const { deleteTask, handleCompleted, handleEditing } = useTodos();

  const [newTaskValue, setNewTaskValue] = useState(task);

  function handleSave() {
    if (newTaskValue === '') {
      toast.error('cannot be empty');

      return;
    }
    if (newTaskValue.length < 3) {
      toast.error('Task length must be at least 3 characters');

      return;
    }

    handleEditing(id, newTaskValue);

    toast.success('Task edited succesfully');

    handleCurrenctlyEditingTask(id);
  }

  return (
    <li
      className='flex items-center space-x-2 p-3 px-5 rounded-xl bg-gray-200  shadow-sm'
      onClick={() => handleCompleted(id)}
    >
      {editingTaskId === id ? (
        <textarea
          value={newTaskValue}
          className='flex-1 resize-none py-1 capitalize px-2 rounded-sm'
          onChange={(e) => setNewTaskValue(e.target.value)}
        />
      ) : (
        <div className='flex flex-1 items-center space-x-2'>
          <input
            type='checkbox'
            checked={completed}
            className='rounded-sm'
            readOnly
          />
          <p
            className={`flex-1 bg-transparent p-1 capitalize text-gray-900 font-medium whitespace-pre-wrap ${
              completed ? 'line-through' : ''
            }`}
          >
            {task}
          </p>
        </div>
      )}
      <div className='flex gap-x-3'>
        <div className='text-slate-700'>
          {editingTaskId === id ? (
            <FaFile className='text-blue-700' onClick={handleSave} />
          ) : (
            <FaPenClip
              className='text-slate-700'
              onClick={() => handleCurrenctlyEditingTask(id)}
            />
          )}
        </div>

        <FaTrashArrowUp
          className='text-red-700'
          onClick={() => deleteTask(id)}
        />
      </div>
    </li>
  );
}

export default Task;
