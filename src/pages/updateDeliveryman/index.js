import React from "react";

// import { Container } from './styles';
import ContainerRegister from "../styles/containerRegister";

function updateDeliveryman() {
  return (
    <ContainerRegister register="Edição de entregadores">
      <label className="w100">Nome</label>
      <input type="text" placeholder="Fulano" className="w100" />
      <label className="w100">Email</label>
      <input
        type="email"
        placeholder="Fulano.silva@degnodereg.com.br"
        className="w100"
      />
    </ContainerRegister>
  );
}

export default updateDeliveryman;
