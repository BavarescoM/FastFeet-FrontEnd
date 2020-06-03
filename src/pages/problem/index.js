import React from "react";

import { MdMoreHoriz } from "react-icons/md";
import Content from "../styles/contentDefault";
import { Head, Body } from "../styles/ListHeadBody/styles";

function problem() {
  return (
    <Content name="Problemas na Entrega">
      <Head>
        <li>Encomenda</li>

        <li>Problema</li>

        <li>Ações</li>
      </Head>
      <Body>
        <li>#01</li>
        <li>cão bravo mordeu o entregador eo cliente estava armado</li>
        <li>
          <button>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </button>
        </li>
      </Body>
      <Body>
        <li>#01</li>
        <li>cão bravo mordeu o entregador eo cliente estava armado</li>
        <li>
          <button>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </button>
        </li>
      </Body>
      <Body>
        <li>#01</li>
        <li>cão bravo mordeu o entregador eo cliente estava armado</li>
        <li>
          <button>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </button>
        </li>
      </Body>
    </Content>
  );
}

export default problem;
