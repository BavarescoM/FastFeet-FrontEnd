import React from "react";

import { MdMoreHoriz } from "react-icons/md";
import Content from "../../styles/components/contentDefault";
import { Head, Body } from "../HeadBody";

function deliveryman() {
  return (
    <Content
      name="Gerenciamento de Entregadores"
      search="Buscar Por Entregadores"
    >
      <Head>
        <li>ID</li>
        <li>Foto</li>
        <li>Nome</li>
        <li>Email</li>
        <li>Ações</li>
      </Head>
      <Body>
        <li>#01</li>
        <li>
          s
          <img src="#" alt="" />
        </li>
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
        <li>
          s
          <img src="#" alt="" />
        </li>
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
        <li>
          s
          <img src="#" alt="" />
        </li>
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

export default deliveryman;
