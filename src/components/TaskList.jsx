import Task from './Task';
import { useTodos } from '../contexts/TodoContext';

function TaskList() {
  const { tasks, sortByValue } = useTodos();

  let sortedTask;
 // console.log(tasks)

  if (sortByValue === 'modified') {
    sortedTask = tasks;
  }
  if (sortByValue === 'alphabet') {
    sortedTask = tasks.slice().sort((a, b) => a.task.localeCompare(b.task));
    console.log(tasks, sortedTask)
  }

  // if (sortByValue === 'modified') {
  //   sortedTask = tasks;
  // } else if (sortByValue === 'alphabet') {
  //   sortedTask = tasks.slice().sort((a, b) => a.task.localeCompare(b.task));
  // }

  return (
    <>
      <h1 className='font-bold text-md text-gray-600 mt-8 '>My Tasks</h1>
      <ul className='space-y-5 mt-4'>
        {sortedTask?.map((task) => (
          <Task key={task.id} task={task} />
          
        ))}
      </ul>
    </>
  );
}

export default TaskList;
