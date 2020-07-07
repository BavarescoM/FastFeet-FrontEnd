/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import { Input, Form } from "@rocketseat/unform";
import ContainerRegister from "../styles/containerRegister";
import AvatarInput from "./avatarInput/";
import api from "../../services/api";
import history from "../../services/history";

function registerDeliveryman({ match }) {
  const id = match.params.id ? decodeURIComponent(match.params.id) : null;

  const [deliveryman, setDeliveryman] = useState(null);
  const [imgAvatar, setimgAvatar] = useState();
  useEffect(() => {
    async function loadUpdate() {
      try {
        const { data } = await api.get(`deliveryman/${id}`);
        setimgAvatar(data.avatar.url);
        setDeliveryman(data);
      } catch (err) {
        toast.error("Não foi possível localizar este destinatário");
        history.push("/deliverymen");
      }
    }
    if (id) {
      loadUpdate();
    }
  }, [id]);
  async function handleSubmit({ name, email, file_id }) {
    try {
      if (id) {
        const response = await api.put(`/deliveryman/${id}`, {
          name,
          email,
          file_id,
        });

        history.push("/deliveryman");
        toast.success("Entregador Atualizado com sucesso");
      } else {
        const response = await api.post("deliveryman", {
          name,
          email,
          file_id,
        });
        console.tron.log(response);
        history.push("/deliveryman");
        toast.success("Entregador salvo com sucesso");
      }
    } catch (err) {
      history.push("/deliveryman");
      toast.error("Erro ao salvar");
    }
  }
  return (
    <Form onSubmit={handleSubmit} initialData={deliveryman}>
      <ContainerRegister
        register={id ? "Edição de entregadores" : "Cadastro de entregadores"}
        goback="/deliveryman"
      >
        <AvatarInput name="file_id" updateImg={imgAvatar} />
        <label className="w100">Nome</label>
        <Input name="name" type="text" placeholder="Fulano" className="w100" />
        <label className="w100">Email</label>
        <Input
          name="email"
          type="email"
          placeholder="Fulano.silva@degnodereg.com.br"
          className="w100"
        />
      </ContainerRegister>
    </Form>
  );
}

export default registerDeliveryman;
