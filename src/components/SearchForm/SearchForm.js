import React from "react";
import './SearchForm.css';

function SearchForm({ searchString, setSearchString, option, setOption }) {
  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Search Contacts"
        className="search-input"
        value={searchString}
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
      />
      <select
        value={option}
        onChange={(event) => {
          setOption(event.target.value);
        }}
        className="options"
      >
        <option value="name">Name</option>
        <option value="street">Street</option>
        <option value="city">City</option>
        <option value="stateName">State</option>
        <option value="zip">Zip</option>
      </select>
    </div>
  );
}

export default SearchForm;
