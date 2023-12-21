import { useTodos } from '../contexts/TodoContext';

function SortBy() {
  const { sortByValue, setSortByValue } = useTodos();
  return (
    <div className='flex gap-x-2 p-2 px-4'>
      <label className='text-md font-semibold text-gray-800'>
        Sort By:
        <select
          className='select border text-sm border-gray-400 p-1 rounded-md ml-2 text-gray-600'
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
