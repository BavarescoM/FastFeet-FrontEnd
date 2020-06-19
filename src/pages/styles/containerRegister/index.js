import React from "react";

import { Container, Content, FormContainer } from "./styles";
import Header from "../header";
import { MdArrowBack, MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";
function containerRegister({ register, children, goback }) {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>{register}</div>
          <div>
            <Link to={goback}>
              <MdArrowBack size={26} color="#fff" />
              <p>VOLTAR</p>
            </Link>
            <button type="submit">
              <MdCheck size={26} color="#fff" />
              <p>SALVAR</p>
            </button>
          </div>
        </Content>
        <FormContainer>{children}</FormContainer>
      </Container>
    </>
  );
}

export default containerRegister;
