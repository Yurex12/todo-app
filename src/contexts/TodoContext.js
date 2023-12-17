import { useContext, createContext, useReducer, useEffect } from 'react';

const TodoContext = createContext();

const initialState = {
  tasks: [],
  newTaskText: '',
  sortByValue: 'modified',
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
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case 'tasks/fetch':
      return {
        ...state,
        tasks: payload,
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
  const [state, dispatch] = useReducer(render, initialState);
  const { tasks, newTaskText, sortByValue, sortedTask } = state;

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

  function setSortByValue(e) {
    dispatch({ type: 'tasks/sort', payload: e.target.value });
  }

  function handleCompleted(taskId) {
    dispatch({ type: 'task/completed', payload: taskId });
  }
  function handleEditing(taskId, newTaskValue) {
    dispatch({ type: 'task/edit', payload: { taskId, newTaskValue } });
    console.log(taskId, newTaskValue);
    localStorage.setItem(
      'tasks',
      JSON.stringify(
        tasks.map((task) =>
          task.id === taskId ? { ...task, task: newTaskValue } : task
        )
      )
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
        sortByValue,
        setSortByValue,
        sortedTask,
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
