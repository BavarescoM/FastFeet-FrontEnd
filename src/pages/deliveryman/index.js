import React,{ useState } from "react";

import { MdMoreHoriz } from "react-icons/md";
import Content from "../styles/contentDefault";
import { Head, Body } from "../styles/ListHeadBody/styles";
import Search from "../styles/SearchRegister";
import InfoCrud from "../styles/infoCrud";
import { Link } from "react-router-dom";
import { MdEdit, MdDeleteForever } from "react-icons/md";

function Deliveryman() {
  const [visible, setVisible] = useState(false);
  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Content name="Gerenciamento de Entregadores">
      <Search search="Buscar Por Entregadores" goRegister="/registerdeliveryman"/>
      <Head>
        <li className="w10">ID</li>
        <li className="w10">Foto</li>
        <li className="w30">Nome</li>
        <li className="w30">Email</li>
        <li className="w20">Ações</li>
      </Head>
      <Body>
        <li className="w10">#01</li>
        <li className="w10">
          s
          <img src="#" alt="" />
        </li>
        <li className="w30">joh doe</li>
        <li className="w30">ludowe@deregs.com</li>
        <li className="w20">
          <button  >
            <MdMoreHoriz size={16} color="#C6C6C6" onClick={handleToggleVisible}/>
          </button>
          <InfoCrud visible={visible}>
               <li>
                <MdEdit size={30} color="#4D85EE" />
                <Link to="/registerdeliveryman">Editar</Link>
              </li>
              <li>
                <MdDeleteForever size={30} color="#DE3B3B" />
                <Link to="/">Excluir</Link>
              </li>
            </InfoCrud>
        </li>
      </Body>
   
     
    </Content>
  );
}

export default Deliveryman;
