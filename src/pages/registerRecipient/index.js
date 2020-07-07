import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { Input, Form } from "@rocketseat/unform";
import ContainerRegister from "../styles/containerRegister";
import api from "../../services/api";

import history from "../../services/history";

function registerRecipient({ match }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [recipient, setRecipient] = useState([]);
  const { id } = match.params;
  console.tron.log(id);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function loadUpdate() {
      const response = await api.get(`recipients/${id}`);
      setRecipient(response.data);
    }
    loadUpdate();
  }, [id]);
  async function handleSubmit({
    name,
    street,
    city,
    zipcode,
    number,
    complement,
    state,
  }) {
    try {
      if (id) {
        const response = await api.put(`/recipients/${id}`, {
          name,
          street,
          city,
          zipcode,
          number,
          complement,
          state,
        });
        history.push("/recipients");
        console.tron.log(response);
        toast.success("Destinatários Atualizado com sucesso");
      } else {
        const response = await api.post("/recipients", {
          name,
          street,
          city,
          zipcode,
          number,
          complement,
          state,
        });
        history.push("/recipients");
        console.tron.log(response);
        toast.success("Destinatários salvo com sucesso");
      }
    } catch (err) {
      toast.error(err);
      console.tron.log(err);
    }
  }
  return (
    <Form onSubmit={handleSubmit} initialData={recipient}>
      <ContainerRegister
        register={id ? "Edição de Destinatários" : "Cadastro de Destinatários"}
        goback="/recipients"
      >
        <label className="w100">Nome</label>
        <Input name="name" type="text" placeholder="Fulano" className="w100" />

        <div className="line">
          <label className="w60">Rua</label>
          <label className="w20">Número</label>
          <label className="w20">Complemento</label>
        </div>

        <div className="line">
          <Input
            name="street"
            type="text"
            placeholder="Rua taquaras"
            className="w60"
          />
          <Input name="number" type="text" placeholder="511" className="w20" />
          <Input
            name="complement"
            type="text"
            placeholder="D ou E "
            className="w20"
          />
        </div>

        <div className="line">
          <label className="w33">Cidade</label>
          <label className="w33">Estado</label>
          <label className="w33">Cep</label>
        </div>

        <div className="line">
          <Input name="city" type="text" placeholder="Seara" className="w33" />
          <Input name="state" type="text" placeholder="SC" className="w33" />
          <Input
            name="zipcode"
            type="text"
            placeholder="89770-000"
            className="w33"
          />
        </div>
      </ContainerRegister>
    </Form>
  );
}

export default registerRecipient;
