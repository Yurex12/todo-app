import { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';

function Form() {
  const [inputtedValue, setInputtedValue] = useState('');
  const { createTask } = useTodos();

  return (
    <div className='p-2 px-4 bg-white'>
      <p className='uppercase text-gray-500 font-semibold text-sm'>
        create a task
      </p>
      <form
        className='py-2 flex gap-x-4 '
        onSubmit={(e) => {
          createTask(e, inputtedValue);
          setInputtedValue('');
        }}
      >
        <input
          className='w-full rounded-lg py-2 px-2 capitalize  bg-gray-200'
          placeholder='Start Typing...'
          value={inputtedValue}
          required
          onChange={(e) => setInputtedValue(e.target.value)}
        />
        <button className='w-36 bg-blue-500 text-gray-50 rounded-full p-1'>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
