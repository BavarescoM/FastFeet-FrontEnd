import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  height: 64px;
  background: #fafafa;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
  }
  li {
    padding: 0px 10px;
    height: 20px;
  }
  li:nth-child(1) {
    border-right: 1px solid #dddddd;
  }

  a {
    font-size: 15px;
    &:active {
      font-weight: 700;
    }
  }
`;
export const Logout = styled.ul`
  margin-right: 10px;
  label {
    font-size: 14px;
    font-weight: 700;
  }
  a {
    color: #de3b3b;
  }
`;
