import React from "react";

import { Input, Form } from "@rocketseat/unform";
import ContainerRegister from "../styles/containerRegister";
import AvatarInput from "./avatarInput/";
import api from "../../services/api";
import { toast } from "react-toastify";
import history from "../../services/history";

function registerDeliveryman() {
  async function handleSubmit({ name, email, file_id }) {
    try {
      const response = await api.post("deliveryman", {
        name,
        email,
        file_id,
      });
      console.tron.log(response);
      history.push("/deliveryman");
      toast.success("Entregador salvo com sucesso");
    } catch (err) {
      history.push("/deliveryman");
      toast.error("Erro ao salvar");
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      {/* initialData={recipient} */}
      <ContainerRegister
        register="Cadastro de entregadores"
        goback="/deliveryman"
      >
        <AvatarInput name="file_id" />
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
