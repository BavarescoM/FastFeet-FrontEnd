import React from "react";

import { MdMoreHoriz } from "react-icons/md";
import Content from "../styles/contentDefault";
import { Head, Body } from "../styles/ListHeadBody/styles";

function problem() {
  return (
    <Content name="Problemas na Entrega">
      <Head>
        <li className="w20">Encomenda</li>

        <li className="w60">Problema</li>

        <li className="w20">Ações</li>
      </Head>
      <Body>
        <li className="w20">#01</li>
        <li className="w60">cão bravo mordeu o entregador eo cliente estava armado</li>
        <li className="w20">
          <button>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </button>
        </li>
      </Body>
      <Body>
        <li className="w20">#01</li>
        <li className="w60">cão bravo mordeu o entregador eo cliente estava armado</li>
        <li className="w20">
          <button>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </button>
        </li>
      </Body>
      <Body>
        <li className="w20">#01</li>
        <li className="w60">cão bravo mordeu o entregador eo cliente estava armado</li>
        <li className="w20">
          <button>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </button>
        </li>
      </Body>
      
    </Content>
  );
}

export default problem;
