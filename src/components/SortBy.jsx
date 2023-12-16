function SortBy() {
  return<div className='mt-4'>
    <label className='text-md font-semibold text-gray-900'>
      Sort By:
      <select
        className='w-auto border border-gray-400 px-3 rounded-md ml-2 text-gray-600'
        // value={sortBy}
        // onChange={(e) => setSortBy(e.target.value)}
      >
        <option value='modified'>Modified</option>
        <option value='alphabet'>Alphabet(A-z)</option>
        <option value='completed-t'>Completed(Top)</option>
        <option value='completed-b'>Completed(Bottom)</option>
      </select>
    </label>
  </div>;
}

export default SortBy;
