import { useTodos } from '../contexts/TodoContext';
import Form from './Form';
import SortBy from './SortBy';
import TaskList from './TaskList';

function Main() {
  const { tasks } = useTodos();
  return (
    <div className='px-4 py-4 flex-1 border-4'>
      <Form />

      {tasks.length ? (
        <>
          <SortBy />
          <TaskList />
        </>
      ) : (
        <div className='my-20'>
          <img src='illustration.jpg' alt='' />
        </div>
      )}
    </div>
  );
}

export default Main;
