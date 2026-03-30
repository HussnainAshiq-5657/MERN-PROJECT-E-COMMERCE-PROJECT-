import { CiSearch } from 'react-icons/ci';

function SearchInput() {
  return (
    <>
      <div className="relative bg-gray-200">
        <input
          type="search"
          placeholder="What are you Looking For ? "
          className="w-64 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <CiSearch className="absolute top-3 right-3  text-xl text-gray-500 " />
      </div>
    </>
  );
}

export default SearchInput;
