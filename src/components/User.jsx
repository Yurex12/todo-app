import { useLocalStorage } from '../hooks/useLocalStorage';

function User() {
  const [name, setName] = useLocalStorage('', 'name');

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className='flex items-center gap-x-4 px-4 py-4'>
      <div className='w-12 h-12'>
        <img src='user.png' alt='' />
      </div>

      <div className='flex-1 flex flex-col'>
        <p className='font-bold  text-md text-gray-600 flex items-center'>
          <span> Hi,</span>
          <input
            type='text'
            className='w-32 sm:w-1/2 border-0 capitalize placeholder:text-[12px] placeholder:text-gray-300 px-1'
            placeholder='enter your nickname'
            value={name}
            onChange={handleSetName}
          />
        </p>
        <p className='text-gray-500 text-sm'>Welcome Back</p>
      </div>
    </div>
  );
}

export default User;
