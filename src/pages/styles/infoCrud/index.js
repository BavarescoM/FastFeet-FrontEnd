/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState, useEffect } from "react";

import { Container, List } from "./styles";
import { MdMoreHoriz } from "react-icons/md";

function infoCrud({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggle() {
    console.log("visvel");
    setVisible(!visible);
  }
  const listener = useCallback(() => {
    if (visible) setVisible(false);
  }, [visible]);

  useEffect(() => {
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [listener]);

  return (
    <>
      <button type="button" onClick={handleToggle}>
        <MdMoreHoriz size={16} color="#C6C6C6" />
      </button>
      <Container visible={visible} onClick={handleToggle}>
        <List>{children}</List>
      </Container>
    </>
  );
}

export default infoCrud;
