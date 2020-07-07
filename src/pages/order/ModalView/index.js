import React from "react";

import { Container, Content } from "./styles";

function ModalView({ visible, close }) {
  return (
    <Container visible={visible}>
      <Content>
        <button className="close" onClick={close}>
          X
        </button>
        <div className="quebra">
          <div className="black">Informações da Encomenda</div>
          <p>rua</p>
          <br />
          <p>estado</p>
          <br />
          <p>cep</p>
          <hr />
          <div className="black">Datas</div>
          <br />
          <div className="black">Retirada:</div> <p>12:55/55:11</p>
          <br />
          <div className="black">Entrega:</div>
          <p>02/03/2020</p>
          <br />
          <hr />
          <div className="black">Assinatura do destinatário</div>
          <br />
          assinado
          <img src="#" alt="assinatura" />
        </div>
      </Content>
    </Container>
  );
}

export default ModalView;
