import { useTodos } from '../contexts/TodoContext';
import Form from './Form';
import SortBy from './SortBy';
import TaskList from './TaskList';

import illustration from '../images/illustration.jpg';

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
          <img src={illustration} className='h-76' alt='' />
        </div>
      )}
    </main>
  );
}

export default Main;
