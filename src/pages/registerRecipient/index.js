import React from "react";

// import { Container } from './styles';
import ContainerRegister from "../styles/containerRegister";

function registerRecipient() {
  return (
    <ContainerRegister register="Cadastro de Destinatários">
      <label className="w100">Nome</label>
      <input type="text" placeholder="Fulano" className="w100" />

      <div className="line">
        <label className="w60">Rua</label>
        <label className="w20">Número</label>
        <label className="w20">Complemento</label>
      </div>

      <div className="line">
        <input type="text" placeholder="Rua taquaras" className="w60" />
        <input type="text" placeholder="511" className="w20" />
        <input type="text" placeholder="D ou E " className="w20" />
      </div>

      <div className="line">
        <label className="w33">Cidade</label>
        <label className="w33">Estado</label>
        <label className="w33">Cep</label>
      </div>

      <div className="line">
        <input type="text" placeholder="Seara" className="w33" />
        <input type="text" placeholder="SC" className="w33" />
        <input type="text" placeholder="89770-000" className="w33" />
      </div>
    </ContainerRegister>
  );
}

export default registerRecipient;
