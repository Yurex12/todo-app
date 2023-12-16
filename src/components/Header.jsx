import { FaSnowflake } from 'react-icons/fa6';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Header() {
  const [name, setName] = useLocalStorage('', 'name');

  return (
    <div>
      <div className='shadow-md shadow-gray-100 py-3'>
        <FaSnowflake className='text-gray-500 text-3xl mx-auto' />
      </div>
      <div className='flex gap-x-4 px-4 mt-6'>
        <img src='user.png' alt='' className='w-12' />
        <div>
          <div className='font-bold text-xl text-gray-600'>
            Hi,
            <input
              type='text'
              className='capitalize placeholder:text-sm placeholder:text-gray-300 px-1'
              placeholder='enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <p className='text-gray-500 text-sm'>Welcome Back</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
