import React from "react";

import { Container, Content, Form } from "./styles";
import Header from "../header";
import { MdArrowBack, MdCheck } from "react-icons/md";
import { Link } from 'react-router-dom';

function containerRegister({ register, children }) {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>{register}</div>
          <div>
            <Link >
              <MdArrowBack size={26} color="#fff" />
              <p>VOLTAR</p>
            </Link>
            <button>
              <MdCheck size={26} color="#fff" />
              <p>SALVAR</p>
            </button>
          </div>
        </Content>
        <Form>{children}</Form>
      </Container>
    </>
  );
}

export default containerRegister;
