import React from "react";
import { useDispatch } from "react-redux";

import { Form, Input } from "@rocketseat/unform";
import { Container, Content } from "./styles";
import logo from "../../assets/logo.png";
import { signInRequest } from "../../store/modules/auth/actions";

function signIn() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <img src={logo} alt="fastfeet" />
          <label htmlFor="seu email">SEU E-MAIL</label>
          <Input name="email" type="text" placeholder="exeplo@email.com" />
          <label htmlFor="sua senha">Sua Senha</label>
          <Input name="password" type="password" />
          <button type="submit">Entrar no Sistema</button>
        </Form>
      </Content>
    </Container>
  );
}

export default signIn;
