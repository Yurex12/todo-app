import { useContext, createContext } from 'react';

const TodoContext = createContext();

function TodoProvider({ children }) {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
}

function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error('todoContext was used outside of it provider');
  return context;
}

export { TodoProvider, useTodos };
