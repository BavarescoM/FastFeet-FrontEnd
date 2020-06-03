import React from "react";

import { Container, Content } from "./styles";
import Header from "../header";

import { MdAdd, MdSearch } from "react-icons/md";

function contentDefault({ name, search, children, primary }) {
  console.log(primary);
  return (
    <>
      <Header />
      <Container>
        <Content>
          <p>{name}</p>
          <div>
            <label htmlFor="">
              <MdSearch size={16} color="#999999" />
              <input type="search" placeholder={search}></input>
            </label>
            <button>
              <MdAdd size={16} color="#fff" />
              CADASTRAR
            </button>
          </div>
          {children}
        </Content>
      </Container>
    </>
  );
}

export default contentDefault;
