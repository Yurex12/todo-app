import { useTodos } from '../contexts/TodoContext';

function Footer() {
  const { tasks } = useTodos();
  const totalTasks = tasks.length;
  const completedTask = tasks.filter((task) => task.completed === true).length;

  const completedPercentage = (completedTask / totalTasks) * 100;

  if (completedPercentage === 100) {
    return (
      <footer className='py-2 bg-gray-600 text-white text-center '>
        <p>You've completed all tasks😎</p>
      </footer>
    );
  }

  return (
    <footer className='py-2 bg-gray-600 text-white text-center '>
      {totalTasks === 0 && <p>Welcome, start by adding a task 😊</p>}
      {totalTasks > 0 && (
        <p>
          You've completed {completedTask} task out of {totalTasks} tasks (
          {Math.round(completedPercentage)}%)
        </p>
      )}
    </footer>
  );
}

export default Footer;
