import Task from './Task';
import { useTodos } from '../contexts/TodoContext';

function TaskList() {
  const { tasks, sortByValue } = useTodos();

  let sortedTask;

  if (sortByValue === 'modified') {
    sortedTask = tasks;
  }
  if (sortByValue === 'alphabet') {
    sortedTask = tasks.slice().sort((a, b) => a.task.localeCompare(b.task));
  }

  if (sortByValue === 'completed-t') {
    sortedTask = tasks
      .slice()
      .sort((a, b) => Number(b.completed) - Number(a.completed));
  }
  if (sortByValue === 'completed-b') {
    sortedTask = tasks
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));
  }

  return (
    <div className='px-4 py-2  flex-1 overflow-y-auto'>
      <h1 className='font-bold text-md text-gray-600 my-2'>My Tasks</h1>
      <div className='space-y-5 mt-1 flex flex-col '>
        {sortedTask?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
