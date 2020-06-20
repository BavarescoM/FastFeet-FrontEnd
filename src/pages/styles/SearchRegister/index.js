import React from "react";

import { SearchRegister } from "./styles";
import { MdAdd, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function Search({ search, goRegister, inptSearch, valueSearch }) {
  return (
    <SearchRegister>
      <label htmlFor="">
        <MdSearch size={16} color="#999999" />
        <input
          type="search"
          placeholder={search}
          onKeyUp={inptSearch}
          value={valueSearch}
        />
      </label>
      <Link to={goRegister}>
        <MdAdd size={16} color="#fff" />
        CADASTRAR
      </Link>
    </SearchRegister>
  );
}

export default Search;
