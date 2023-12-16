import { useContext, createContext, useReducer, useEffect } from 'react';

const TodoContext = createContext();

const initialState = {
  tasks: [],
  newTaskText: '',
};

function render(state, { type, payload }) {
  switch (type) {
    case 'task/value':
      return {
        ...state,
        newTaskText: payload,
      };
    case 'task/create':
      if (state.newTaskText.length < 2) {
        alert('Task must be at least three letters');
        return state;
      }
      return {
        ...state,
        tasks: [payload, ...state.tasks],
        newTaskText: '',
      };
    case 'task/delete':
      return {
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case 'tasks/fetch':
      return {
        ...state,
        tasks: payload,
      };
    case 'SortTasks':
      break;

    default:
      throw new Error('unknown action');
  }
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(render, initialState);
  const { tasks, newTaskText } = state;

  function getText(e) {
    dispatch({ type: 'task/value', payload: e.target.value });
  }

  function createTask(e) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      task: newTaskText,
      completed: false,
    };

    dispatch({ type: 'task/create', payload: newTask });
    localStorage.setItem('tasks', JSON.stringify([newTask, ...tasks]));
  }

  function deleteTask(taskId) {
    dispatch({ type: 'task/delete', payload: taskId });

    localStorage.setItem(
      'tasks',
      JSON.stringify(state.tasks.filter((task) => task.id !== taskId))
    );
  }

  useEffect(() => {
    const storedValue = localStorage.getItem('tasks');
    const data = storedValue ? JSON.parse(storedValue) : [];

    dispatch({ type: 'tasks/fetch', payload: data });
  }, []);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        getText,
        createTask,
        deleteTask,
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
