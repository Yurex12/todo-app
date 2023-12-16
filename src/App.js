import {
  FaTrashArrowUp,
  FaPenClip,
  FaFile,
  FaSnowflake,
} from 'react-icons/fa6';

import './index.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='border-4 border-red-500 h-screen md:w-[400px] mx-auto container md:border-2 md:border-blue-500'>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
