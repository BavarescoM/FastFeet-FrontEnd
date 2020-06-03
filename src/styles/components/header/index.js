import React from "react";

import { Container, List, Logout } from "./styles";
import logo from "../../../assets/logo.png";
function header() {
  return (
    <Container>
      <List>
        <li>
          <img src={logo} alt="logo" />
        </li>

        <li>
          <a href="#">ENCOMENDAS</a>
        </li>
        <li>
          <a href="#"> ENTREGADORES</a>
        </li>
        <li>
          <a href="#">DESTINATÁRIOS</a>
        </li>
        <li>
          <a href="#">PROBLEMAS</a>
        </li>
      </List>
      <Logout>
        <li>
          <label>Admin FastFeet</label>
        </li>
        <li>
          <a href="#">sair do sistema</a>
        </li>
      </Logout>
    </Container>
  );
}

export default header;
