import { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';

function Form() {
  //const inputtedValue = useRef('');
  const [inputtedValue, setInputtedValue] = useState('');
  const { createTask } = useTodos();

  return (
    <div className='mt-2 h-full'>
      <p className='uppercase text-gray-500 font-semibold text-sm'>
        create a task
      </p>
      <form
        className='py-2 flex gap-x-4'
        onSubmit={(e) => {
          createTask(e, inputtedValue);
          setInputtedValue('');
        }}
      >
        <input
          className='flex-1 rounded-lg py-2 px-2 capitalize  bg-gray-200'
          placeholder='Start Typing...'
          value={inputtedValue}
          required
          onChange={(e) => setInputtedValue(e.target.value)}
        />
        <button className='bg-blue-500 text-gray-50 rounded-full px-4'>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
