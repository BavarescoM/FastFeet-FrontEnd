import React from "react";

import { SearchRegister } from "./styles";
import { MdAdd, MdSearch } from "react-icons/md";

function Search({ search }) {
  return (
    <SearchRegister>
      <label htmlFor="">
        <MdSearch size={16} color="#999999" />
        <input type="search" placeholder={search}></input>
      </label>
      <button>
        <MdAdd size={16} color="#fff" />
        CADASTRAR
      </button>
    </SearchRegister>
  );
}

export default Search;
