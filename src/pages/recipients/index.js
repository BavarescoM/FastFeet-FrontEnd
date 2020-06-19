import React, { useState, useEffect } from "react";

import { MdMoreHoriz } from "react-icons/md";
import Content from "../styles/contentDefault";
import { Head, Body } from "../styles/ListHeadBody/styles";
import Search from "../styles/SearchRegister";
import InfoCrud from "../styles/infoCrud";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import api from "../../services/api";
import history from "../../services/history";

function Recipients() {
  const [recipients, setRecipients] = useState([]);
  async function deleteRecipient(id) {
    try {
      console.tron.log(id);
      const response = await api.delete(`recipients/${id}`);
      history.go("/recipients");
      toast.success("Item deletado com suceso");
    } catch (err) {
      toast.error("Ocorreu um erro ao deletar");
    }
  }
  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get("/recipients");
      setRecipients(response.data);
    }
    loadRecipient();
  }, []);
  const [visible, setVisible] = useState(false);
  function handleToggleVisible(id) {
    console.tron.log(id);
    if (id) setVisible(!visible);
  }

  return (
    <Content name="Gerenciamento de Destinatários">
      <Search
        search="Buscar Por destinatário"
        goRegister="/registerrecipient"
      />
      <Head>
        <li className="w20">ID</li>

        <li className="w30">Nome</li>
        <li className="w30">Endereço</li>
        <li className="w20">Ações</li>
      </Head>

      {recipients.map((recipient) => (
        <Body key={recipient.id}>
          <li className="w20">#{recipient.id}</li>
          <li className="w30">{recipient.name}</li>
          <li className="w30">{recipient.street}</li>
          <li className="w20">
            <button>
              <MdMoreHoriz
                size={16}
                color="#C6C6C6"
                onClick={() => handleToggleVisible(recipient.id)}
              />
            </button>
            <InfoCrud visible={visible} id={recipient.id}>
              <li>
                <MdEdit size={30} color="#4D85EE" />
                <Link to={`/updaterecipient/${recipient.id}`}>Editar</Link>
              </li>
              <li>
                <MdDeleteForever size={30} color="#DE3B3B" />
                <button onClick={() => deleteRecipient(recipient.id)}>
                  Excluir
                </button>
              </li>
            </InfoCrud>
          </li>
        </Body>
      ))}
    </Content>
  );
}

export default Recipients;
