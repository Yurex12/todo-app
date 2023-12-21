import { FaTrashArrowUp, FaPenClip, FaFile } from 'react-icons/fa6';
import { useTodos } from '../contexts/TodoContext';
import { useEffect, useReducer, useRef } from 'react';

function reducer(state, { type, payload }) {
  switch (type) {
    case 'task/edit':
      return { ...state, editing: !state.editing };
    case 'task/newValue':
      return { ...state, newTaskValue: payload };

    default:
      break;
  }
}

function Task({ task: { task, completed, id } }) {
  const { deleteTask, handleCompleted, handleEditing } = useTodos();
  const [{ editing, newTaskValue }, dispacth] = useReducer(reducer, {
    editing: false,
    newTaskValue: task,
  });

  function handleSave(newTaskValue) {
    if (newTaskValue === '') {
      alert('cannot be empty');
      return;
    }
    dispacth({ type: 'task/edit' });
  }

  return (
    <div className='flex items-center space-x-2 p-3 px-5 rounded-xl bg-gray-200  shadow-sm'>
      {editing ? (
        <textarea
          value={newTaskValue}
          className='flex-1 resize-none py-1 capitalize px-2 rounded-sm'
          onChange={(e) =>
            dispacth({ type: 'task/newValue', payload: e.target.value })
          }
        />
      ) : (
        <div className='flex flex-1 items-center space-x-2'>
          <input
            type='checkbox'
            checked={completed}
            className='rounded-sm'
            onChange={() => handleCompleted(id)}
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
        {completed || (
          <div
            className='text-slate-700'
            onClick={() => handleSave(newTaskValue)}
          >
            {editing ? (
              <FaFile
                className='text-blue-700'
                onClick={() => handleEditing(id, newTaskValue)}
              />
            ) : (
              <FaPenClip />
            )}
          </div>
        )}
        <FaTrashArrowUp
          className='text-red-700'
          onClick={() => deleteTask(id)}
        />
      </div>
    </div>
  );
}

export default Task;
