import React from "react";

import { Container, List, Logout } from "./styles";
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';
function header() {
  return (
    <Container>
      <List>
        <li>
          <Link to="/order">
          <img src={logo} alt="logo" />
          </Link>
        </li>

        <li>
           <Link to="/order">
          ENCOMENDAS
          </Link>
        </li>
        <li>
        <Link to="/deliveryman">
           ENTREGADORES
          </Link>
        </li>
        <li>
        <Link to="/recipients">
          DESTINATÁRIOS
          </Link>
        </li>
        <li>
        <Link to="/problem">
          PROBLEMAS
          </Link>
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
