import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';
import toast from 'react-hot-toast';

const TodoContext = createContext();

const fetchData = () => {
  const storedValue = localStorage.getItem('tasks');
  const data = storedValue ? JSON.parse(storedValue) : [];

  return data;
};

const initialState = {
  tasks: fetchData(),
  sortByValue: 'modified',
};

function render(state, { type, payload }) {
  switch (type) {
    case 'task/create':
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };
    case 'task/delete':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };

    case 'tasks/sort':
      return { ...state, sortByValue: payload };
    case 'task/completed':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, completed: !task.completed } : task
        ),
      };

    case 'task/edit':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.taskId
            ? { ...task, task: payload.newTaskValue }
            : task
        ),
      };

    default:
      throw new Error('unknown action');
  }
}

function TodoProvider({ children }) {
  const [{ sortByValue, tasks }, dispatch] = useReducer(render, initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function createTask(e, inputtedValue) {
    e.preventDefault();

    if (inputtedValue.length < 3) {
      toast.error('Task must be at least three letters');
      return;
    }

    const newTask = {
      id: Date.now(),
      task: inputtedValue,
      completed: false,
    };

    dispatch({ type: 'task/create', payload: newTask });
    toast.success('Task sucessfully Added');
  }

  function deleteTask(taskId) {
    dispatch({ type: 'task/delete', payload: taskId });
    toast.success('Task deleted');
  }

  function setSortByValue(e) {
    dispatch({ type: 'tasks/sort', payload: e.target.value });
  }

  function handleCompleted(taskId) {
    dispatch({ type: 'task/completed', payload: taskId });
  }
  function handleEditing(taskId, newTaskValue) {
    dispatch({ type: 'task/edit', payload: { taskId, newTaskValue } });
   // console.log('working');
  }

  return (
    <TodoContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        sortByValue,
        setSortByValue,
        handleCompleted,
        handleEditing,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error('todoContext was used outside of it provider');
  return context;
}

export { TodoProvider, useTodos };
