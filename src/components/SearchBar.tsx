import Magnifier from '../assets/icons/MagnifyingGlass.svg?react';

function SearchBar() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Buscando...');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full min-h-9 pr-m pl-l justify-between items-center border-custom-s rounded-full border-border-neutral-inverse-primary'
    >
      <input
        type='search'
        placeholder='Buscar en ViseVersa'
        className='placeholder:text-text-neutral-tertiary w-full outline-0 body-regular [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden'
      />
      <button
        type='submit'
        className='cursor-pointer'
      >
        <Magnifier className='text-icon-neutral-primary' />
      </button>
    </form>
  );
}
export default SearchBar;
