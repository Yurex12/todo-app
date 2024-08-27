import { TodoProvider } from './contexts/TodoContext';

import './index.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
// import Test from './components/Test';

function App() {
  return (
    <>
      <div className=' h-[100dvh] max-w-[500px] mx-auto flex flex-col  shadow-xl bg-white'>
        <Header />

        <TodoProvider>
          <Main />
          <Footer />
        </TodoProvider>
      </div>

      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </>
  );
}

export default App;
