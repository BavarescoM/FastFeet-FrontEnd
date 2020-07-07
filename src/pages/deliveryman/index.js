import React, { useState, useEffect } from "react";

import Content from "../styles/contentDefault";
import { Head, Body } from "../styles/ListHeadBody/styles";
import Search from "../styles/SearchRegister";
import InfoCrud from "../styles/infoCrud";
import { Link } from "react-router-dom";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import Pagination from "../styles/Pagination";
import api from "../../services/api";
import history from "../../services/history";
import { toast } from "react-toastify";

function Deliveryman() {
  const [deliverymans, setDeliverymans] = useState([]);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [valueSearch, setValueSearch] = useState();

  async function deleteDeliveryman(id) {
    try {
      await api.delete(`deliveryman/${id}`);
      history.go("/deliveryman");
      toast.success("Item deletado com suceso");
    } catch (err) {
      toast.error("Ocorreu um erro ao deletar");
    }
  }
  async function searchDeliveryman(e) {
    setValueSearch(e.target.value);
    const response = await api.get(
      `/deliveryman?search=${valueSearch}&page=${page}`
    );
    setDeliverymans(response.data.items);
    setPage(response.data.page);
    setPages(response.data.pages);
    setTotal(response.data.total);
  }

  async function handlePagination(n) {
    const response = await api.get(
      `/deliveryman?search=${valueSearch}&page=${n}`
    );
    setDeliverymans(response.data.items);
    setPage(response.data.page);
    setPages(response.data.pages);
    setTotal(response.data.total);
  }

  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get(`/deliveryman?search&page=${page}`);
      setDeliverymans(response.data.items);
      setPage(response.data.page);
      setPages(response.data.pages);
      setTotal(response.data.total);
    }
    loadRecipient();
  }, [page]);

  return (
    <Content name="Gerenciamento de Entregadores">
      <Search
        search="Buscar Por Entregadores"
        goRegister="/registerdeliveryman"
        inptSearch={searchDeliveryman}
      />
      <Head>
        <li className="w10">ID</li>
        <li className="w10">Foto</li>
        <li className="w30">Nome</li>
        <li className="w30">Email</li>
        <li className="w20">Ações</li>
      </Head>
      {deliverymans.map((deliveryman) => (
        <Body key={deliveryman.id}>
          <li className="w10">#{deliveryman.id}</li>
          <li className="w10">
            <img src={deliveryman.avatar.url} alt={deliveryman.name} />
          </li>
          <li className="w30">{deliveryman.name}</li>
          <li className="w30">{deliveryman.email}</li>
          <li className="w20">
            <InfoCrud>
              <li>
                <MdEdit size={30} color="#4D85EE" />
                <Link to={`/updatedeliveryman/${deliveryman.id}`}>Editar</Link>
              </li>
              <li>
                <MdDeleteForever size={30} color="#DE3B3B" />
                <button
                  type="button"
                  onClick={() => deleteDeliveryman(deliveryman.id)}
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

export default Deliveryman;
