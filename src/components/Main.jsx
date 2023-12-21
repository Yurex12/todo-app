import { Fragment } from 'react';
import { useTodos } from '../contexts/TodoContext';
import Form from './Form';
import SortBy from './SortBy';
import TaskList from './TaskList';

function Main() {
  const { tasks } = useTodos();
  return (
    <main className='flex flex-col flex-1 overflow-scroll'>
      <Form />

      {tasks.length ? (
        <>
          <SortBy />
          <TaskList />
        </>
      ) : (
        <div className='flex-1 flex items-center'>
          <img src='illustration.jpg' className='h-76' alt='' />
        </div>
      )}
    </main>
  );
}

export default Main;
