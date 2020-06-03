import React from "react";

import { Head, Body } from "../styles/ListHeadBody/styles";
import Search from "../styles/SearchRegister";
import Content from "../styles/contentDefault";
import Status from "../styles/status/index";
import { MdMoreHoriz } from "react-icons/md";

function order() {
  return (
    <>
      <Content name="Gerenciamento de encomenda">
        <Search search="Buscar Por Encomenda" />
        <Head>
          <li>ID</li>
          <li>Destinatário</li>
          <li>Entregador</li>
          <li>Cidade</li>
          <li>Estado</li>
          <li>Status</li>
          <li>Ações</li>
        </Head>
        <Body>
          <li>#01</li>
          <li>ludowe</li>
          <li>
            <img src="#" alt="" />
            jown doe
          </li>
          <li>chape</li>
          <li>sc</li>
          <li>
            <Status status="retirada" statusCode="Retirada" />
          </li>
          <li>
            <button>
              <MdMoreHoriz size={16} color="#C6C6C6" />
            </button>
          </li>
        </Body>
        <Body>
          <li>#01</li>
          <li>ludowe</li>
          <li>
            <img src="#" alt="" />
            jown doe
          </li>
          <li>chape</li>
          <li>sc</li>
          <li>
            <Status status="pendente" statusCode="Pendente" />
          </li>
          <li>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </li>
        </Body>
        <Body>
          <li>#01</li>
          <li>ludowe</li>
          <li>
            <img src="#" alt="" />
            jown doe
          </li>
          <li>chape</li>
          <li>sc</li>
          <li>
            <Status status="entregue" statusCode="Entregue" />
          </li>
          <li>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </li>
        </Body>
        <Body>
          <li>#01</li>
          <li>ludowe</li>
          <li>
            <img src="#" alt="" />
            jown doe
          </li>
          <li>chape</li>
          <li>sc</li>
          <li>
            <Status status="cancelada" statusCode="Cancelada" />
          </li>
          <li>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </li>
        </Body>
      </Content>
    </>
  );
}

export default order;
