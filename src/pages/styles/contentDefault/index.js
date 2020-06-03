import React from "react";

import { Container, Content } from "./styles";
import Header from "../header";

function contentDefault({ name, children }) {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <p>{name}</p>
          {children}
        </Content>
      </Container>
    </>
  );
}

export default contentDefault;
