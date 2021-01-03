import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className='search-box'
        type='search'
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchBox;
