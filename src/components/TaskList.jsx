import Task from './Task';
import { useTodos } from '../contexts/TodoContext';
import { memo } from 'react';

function TaskList() {
  const { tasks } = useTodos();
  console.log(tasks);
  return (
    <>
      <h1 className='font-bold text-md text-gray-600 mt-8 text-center'>My Tasks</h1>
      <div className='space-y-5 mt-4'>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}

export default memo(TaskList);
