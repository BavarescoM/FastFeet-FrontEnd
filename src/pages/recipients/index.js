import React from "react";

import { MdMoreHoriz } from "react-icons/md";
import Content from "../../styles/components/contentDefault";
import { Head, Body } from "../HeadBody";

function recipients() {
  return (
    <Content
      name="Gerenciamento de Destinatários"
      search="Buscar Por destinatário"
      primary
    >
      <Head>
        <li>ID</li>

        <li>Nome</li>
        <li>Endereço</li>
        <li>Ações</li>
      </Head>
      <Body>
        <li>#01</li>

        <li>joh doe</li>
        <li>ludowe@deregs.com</li>
        <li>
          <button>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </button>
        </li>
      </Body>
      <Body>
        <li>#01</li>

        <li>joh doe</li>
        <li>ludowe@deregs.com</li>
        <li>
          <button>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </button>
        </li>
      </Body>
      <Body>
        <li>#01</li>

        <li>joh doe</li>
        <li>ludowe@deregs.com</li>
        <li>
          <button>
            <MdMoreHoriz size={16} color="#C6C6C6" />
          </button>
        </li>
      </Body>
    </Content>
  );
}

export default recipients;
