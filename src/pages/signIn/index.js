import React from "react";

import { Container, Content } from "./styles";
import logo from "../../assets/logo.png";
function signIn() {
  return (
    <Container>
      <Content>
        <form>
          <img src={logo} alt="fastfeet" />
          <label htmlFor="seu email">SEU E-MAIL</label>
          <input type="text" placeholder="exeplo@email.com" />
          <label htmlFor="sua senha">Sua Senha</label>
          <input type="password" />
          <button type="submit">Entrar no Sistema</button>
        </form>
      </Content>
    </Container>
  );
}

export default signIn;
