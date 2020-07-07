import styled, { css } from "styled-components";

const colors = {
  Retirada: css`
    background: #bad2ff;
    color: #4d85ee;
  `,
  Cancelada: css`
    background: #fab0b0;
    color: #de3b3b;
  `,
  Pendente: css`
    background: #f0f0df;
    color: #c1bc35;
  `,
  Entregue: css`
    background: #dff0df;
    color: #2ca42b;
  `,
};
export const Status = styled.div`
  margin-top: 20px;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  font-size: 12px;
  padding: 0 5px;
  border: transparent;
  ${(props) => colors[props.status]};
`;
