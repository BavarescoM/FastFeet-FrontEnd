import React, { createContext, useState, useContext } from "react";

const MActionsContext = createContext();

export default function ModalContext({ children }) {
  const [show, setShow] = useState(false);
  function openModal() {
    setShow(true);
  }
  function closeModal() {
    setShow(false);
  }

  return (
    <MActionsContext.Provider value={{ openModal, closeModal, show }}>
      {children}
    </MActionsContext.Provider>
  );
}
export function useModal() {
  const context = useContext(MActionsContext);
  const { openModal, closeModal, show } = context;
  return { openModal, closeModal, show };
}
