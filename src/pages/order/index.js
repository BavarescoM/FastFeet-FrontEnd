import React, { useState } from "react";

import { Head, Body } from "../styles/ListHeadBody/styles";
import Search from "../styles/SearchRegister";
import Content from "../styles/contentDefault";
import Status from "../styles/status/index";
import { MdMoreHoriz } from "react-icons/md";
import InfoCrud from "../styles/infoCrud";
import { Link } from "react-router-dom";
import { MdEdit, MdRemoveRedEye, MdDeleteForever } from "react-icons/md";

function Order() {
  const [visible, setVisible] = useState(false);
  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <>
      <Content name="Gerenciamento de encomenda">
        <Search search="Buscar Por Encomenda" goRegister="/registerdelivery" />
        <Head>
          <li className="w10">ID</li>
          <li className="w20">Destinatário</li>
          <li className="w20">Entregador</li>
          <li className="w10">Cidade</li>
          <li className="w10">Estado</li>
          <li className="w10">Status</li>
          <li className="w20"> Ações</li>
        </Head>
        <Body>
          <li className="w10">#01</li>
          <li className="w20">ludowe</li>
          <li className="w20">
            <img src="#" alt="" />
            jown doe
          </li>
          <li className="w10">chape</li>
          <li className="w10">sc</li>
          <li className="w10">
            <Status status="retirada" statusCode="Retirada" />
          </li>
          <li className="w20">
            <button>
              <MdMoreHoriz
                size={16}
                color="#C6C6C6"
                onClick={handleToggleVisible}
              />
            </button>
            <InfoCrud visible={visible}>
              <li>
                <MdRemoveRedEye size={30} color="#8E5BE8" />
                <Link to="/compomnentmodal">Visualizar</Link>
              </li>
              <li>
                <MdEdit size={30} color="#4D85EE" />
                <Link to="/registerdelivery">Editar</Link>
              </li>
              <li>
                <MdDeleteForever size={30} color="#DE3B3B" />
                <Link to="/">Excluir</Link>
              </li>
            </InfoCrud>
          </li>
        </Body>
      </Content>
    </>
  );
}

export default Order;
