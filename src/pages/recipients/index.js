/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

import Content from "../styles/contentDefault";
import { Head, Body } from "../styles/ListHeadBody/styles";
import Search from "../styles/SearchRegister";
import InfoCrud from "../styles/infoCrud";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import api from "../../services/api";
import history from "../../services/history";
import Pagination from "../styles/Pagination";

function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [valueSearch, setValueSearch] = useState();

  async function deleteRecipient(id) {
    try {
      await api.delete(`recipients/${id}`);
      history.go("/recipients");
      toast.success("Item deletado com suceso");
    } catch (err) {
      toast.error("Ocorreu um erro ao deletar");
    }
  }

  async function searchRecipients(e) {
    setValueSearch(e.target.value);
    const response = await api.get(
      `/recipients?search=${valueSearch}&page=${page}`
    );
    setRecipients(response.data.items);
    setPage(response.data.page);
    setPages(response.data.pages);
    setTotal(response.data.total);
  }

  async function handlePagination(n) {
    const response = await api.get(
      `/recipients?search=${valueSearch}&page=${n}`
    );
    setRecipients(response.data.items);
    setPage(response.data.page);
    setPages(response.data.pages);
    setTotal(response.data.total);
  }

  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get(`/recipients?search&page=${page}`);
      setRecipients(response.data.items);
      setPage(response.data.page);
      setPages(response.data.pages);
      setTotal(response.data.total);
    }
    loadRecipient();
  }, [page]);

  return (
    <Content name="Gerenciamento de Destinatários">
      <Search
        search="Buscar Por destinatário"
        goRegister="/registerrecipient"
        inptSearch={searchRecipients}
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
            <InfoCrud>
              <li>
                <MdEdit size={30} color="#4D85EE" />

                <Link to={`/updaterecipient/${recipient.id}`}>Editar</Link>
              </li>
              <li>
                <MdDeleteForever size={30} color="#DE3B3B" />
                <button
                  type="button"
                  onClick={() => deleteRecipient(recipient.id)}
                >
                  Excluir
                </button>
              </li>
            </InfoCrud>
          </li>
        </Body>
      ))}
      <Pagination
        total={total}
        page={page}
        pages={pages}
        callback={handlePagination}
      />
    </Content>
  );
}

export default Recipients;
