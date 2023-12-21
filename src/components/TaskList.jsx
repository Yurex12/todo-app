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
    <div className='px-2'>
      <h1 className='font-bold text-md text-gray-600 mt-8'>My Tasks</h1>
      <ul className='space-y-5 mt-4'>
        {sortedTask?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
