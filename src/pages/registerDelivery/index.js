import React from "react";

// import { Container } from './styles';
import ContainerRegister from "../styles/containerRegister";

function registerDelivery() {
  return (
    <ContainerRegister register="Cadastro de Encomendas">
      <div className="line">
        <label className="w50">Destinatário</label>
        <label className="w50">Entregador</label>
      </div>

      <div className="line">
        <select className="w50">
          <option>Ludwig van Beethoven</option>
        </select>
        <select className="w50">
          <option>John Doe</option>
        </select>
      </div>

      <label className="w100">Nome do produto</label>
      <input type="text" placeholder="Yamaha SX7" className="w100" />
    </ContainerRegister>
  );
}

export default registerDelivery;
