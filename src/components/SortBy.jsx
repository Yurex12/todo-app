import { useTodos } from '../contexts/TodoContext';

function SortBy() {
  const { sortByValue, setSortByValue } = useTodos();

  function handleOption(e) {
    setSortByValue(e.target.value);
  }

  return (
    <div className='flex gap-x-2 py-1 px-4'>
      <label className='text-lg  text-gray-800'>
        Sort By:
        <select
          className='select border text-sm border-gray-400 p-1 rounded-md ml-2 text-gray-600 focus:outline-none'
          value={sortByValue}
          onChange={handleOption}
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
