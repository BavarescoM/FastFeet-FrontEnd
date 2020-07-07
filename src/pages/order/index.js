/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useRef, useContext } from "react";
import { Head, Body } from "../styles/ListHeadBody/styles";
import Search from "../styles/SearchRegister";
import Content from "../styles/contentDefault";
import Status from "../styles/status/index";
import InfoCrud from "../styles/infoCrud";
import { Link } from "react-router-dom";
import { MdEdit, MdRemoveRedEye, MdDeleteForever } from "react-icons/md";
import api from "../../services/api";
import history from "../../services/history";
import Pagination from "../styles/Pagination";
import { toast } from "react-toastify";
import ModalView from "./ModalView";

import { useModal } from "../styles/context/ModalContext/index";

function Order() {
  const { closeModal, openModal, show } = useModal();
  const [order, setOrder] = useState([]);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [valueSearch, setValueSearch] = useState();

  async function deleteOrder(id) {
    try {
      await api.delete(`order/${id}`);
      history.go("/order");
      toast.success("Item deletado com suceso");
    } catch (err) {
      toast.error("Ocorreu um erro ao deletar");
    }
  }

  async function searchOrder(e) {
    setValueSearch(e.target.value);
    const response = await api.get(`/order?search=${valueSearch}&page=${page}`);
    setOrder(response.data.items);
    setPage(response.data.page);
    setPages(response.data.pages);
    setTotal(response.data.total);
  }

  async function handlePagination(n) {
    const response = await api.get(`/order?search=${valueSearch}&page=${n}`);
    setOrder(response.data.items);
    setPage(response.data.page);
    setPages(response.data.pages);
    setTotal(response.data.total);
  }

  useEffect(() => {
    async function loadOrder() {
      const response = await api.get(`/order?search&page=${page}`);
      console.tron.log(response);
      let ord = [];
      response.data.items.map((obj) => {
        if (obj.canceled_at !== null) {
          ord.push({ ...obj, status: "Cancelada" });
          return;
        }
        if (obj.end_date !== null) {
          ord.push({ ...obj, status: "Entregue" });
          return;
        }
        if (obj.start_date !== null) {
          ord.push({ ...obj, status: "Pendente" }); // não tenho certeza
          return;
        } else {
          ord.push({ ...obj, status: "Retirada" });
        }
      });
      console.log(ord);

      setOrder(ord);
      setPage(response.data.page);
      setPages(response.data.pages);
      setTotal(response.data.total);
    }
    loadOrder();
  }, [page]);

  return (
    <>
      <ModalView visible={show} close={closeModal} />

      <Content name="Gerenciamento de encomenda">
        <Search
          search="Buscar Por Encomenda"
          goRegister="/registerdelivery"
          inptSearch={searchOrder}
        />
        <Head>
          <li className="w10">ID</li>
          <li className="w20">Destinatário</li>
          <li className="w20">Entregador</li>
          <li className="w10">Cidade</li>
          <li className="w10">Estado</li>
          <li className="w10">Status</li>
          <li className="w20"> Ações</li>
        </Head>
        {order.map((ord) => (
          <Body key={ord.id}>
            <li className="w10">#{ord.id}</li>
            <li className="w20">{ord.recipient.name}</li>
            <li className="w20">
              <img src={ord.signature.url} alt={ord.recipient.name} />
            </li>
            <li className="w10">{ord.recipient.city}</li>
            <li className="w10">{ord.recipient.state}</li>
            <li className="w10">
              <Status status={ord.status} statusCode={ord.status} />
            </li>
            <li className="w20">
              <InfoCrud>
                <li>
                  <MdRemoveRedEye size={30} color="#8E5BE8" />
                  <button type="button" onClick={openModal}>
                    Visualizar
                  </button>
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
        ))}
      </Content>
    </>
  );
}

export default Order;
