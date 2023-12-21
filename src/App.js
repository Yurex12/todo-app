import { TodoProvider } from './contexts/TodoContext';

import './index.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className=' h-screen w-full max-w-[500px] mx-auto flex flex-col  shadow-xl bg-white'>
      <Header />
            
      <TodoProvider>
         <Main /> 
        <Footer />
      </TodoProvider>
    </div>
  );
}

export default App;
