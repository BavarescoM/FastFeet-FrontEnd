import styled from "styled-components";

export const Head = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
export const Body = styled.ul`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  li {
    margin: 10px 10px;
    color: #666666;
    padding: 20px 20px;
    height: 57px;

    button {
      background: transparent;
      border: transparent;
    }
  }
`;
