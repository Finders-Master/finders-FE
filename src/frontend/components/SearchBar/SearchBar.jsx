/* eslint-disable react/button-has-type */
import React from 'react';
import { GrLocation, GrClose } from 'react-icons/gr';

const SearchBar = ({
  handleInput, handleSubmit, search, handleSearch,
}) => (
  <form
    className={`searchbar ${search ? 'searchbar__active' : 'searchbar__inactive'}
    animate__animated 
    animate__fadeInDown
    animate__faster
    `}
    onSubmit={() => { handleSubmit(); }}
  >
    <div className="searchbar__container">
      <i><GrLocation /></i>
      <input
        type="text"
        value="search"
        onChange={() => { handleInput(); }}
      />
      <button
        onClick={() => { handleSearch(); }}
      >
        <GrClose />
      </button>
    </div>
  </form>
);

export default SearchBar;
