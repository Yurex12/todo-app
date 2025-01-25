import { useEffect, useRef, useState } from 'react';
import { useTodos } from '../contexts/TodoContext';
import toast from 'react-hot-toast';

function Form() {
  const [inputtedValue, setInputtedValue] = useState('');
  const { createTask } = useTodos();

  const formEl = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (inputtedValue.length < 3) {
      toast.error('Task length must be at least three letters');
      return;
    }

    const newTask = {
      id: Date.now(),
      task: inputtedValue,
      completed: false,
    };

    createTask(newTask);
    setInputtedValue('');
    toast.success('Task sucessfully Added');
  }

  useEffect(() => {
    formEl.current.focus();
  }, []);

  return (
    <div className='p-2 px-4 bg-white'>
      <p className=' text-gray-700 text-md'>Create a Task</p>
      <form className='py-1 flex gap-x-4 ' onSubmit={handleSubmit}>
        <input
          className='w-full rounded-lg py-1 px-2 bg-gray-100 outline-none border border-blue-200 text-gray-700 placeholder:text-[11px] focus:border-blue-700'
          placeholder='Start typing...'
          ref={formEl}
          value={inputtedValue}
          required
          onChange={(e) => setInputtedValue(e.target.value)}
        />
        <button className='w-36 text-[12px] tracking-wide bg-blue-500 text-gray-50 rounded-full p-1'>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
