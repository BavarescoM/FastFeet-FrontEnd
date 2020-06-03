import React from "react";

import { Status } from "./styles";

import { MdCheckCircle } from "react-icons/md";

function status({ statusCode, status }) {
  return (
    <Status status={status}>
      <MdCheckCircle color={status} />
      {statusCode}
    </Status>
  );
}

export default status;
