import { useTodos } from '../contexts/TodoContext';

function SortBy() {
  const { sortByValue, setSortByValue } = useTodos();
  return (
    <div className='mt-4 flex gap-x-2 px-2'>
      <label className='text-md font-semibold text-gray-800'>
        Sort By:
        <select
          className=' border text-sm border-gray-400 px-1 rounded-md ml-2 text-gray-600'
          value={sortByValue}
          onChange={(e) => setSortByValue(e)}
        >
          <option value='modified'>Modified</option>
          <option value='alphabet'>Alphabet</option>
          <option value='completed-t'>Completed(Top)</option>
          <option value='completed-b'>Completed(Bottom)</option>
        </select>
      </label>
    </div>
  );
}

export default SortBy;
