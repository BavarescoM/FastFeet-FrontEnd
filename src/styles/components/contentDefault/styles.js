import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
`;
export const Content = styled.div`
  margin: 0 10%;
  p {
    padding-top: 30px;
    padding-bottom: 30px;
    font-weight: 700;

    font-size: 24px;
  }
  div {
    display: ${(props) => (props.primary ? "flex" : "none")};

    justify-content: space-between;

    label {
      display: flex;
      align-items: center;
      padding: 0 0 0 10px;
      background: #fff;
      border-radius: 4px;
      border: 1px solid #dddddd;
      input {
        border: transparent;
        padding: 8px;
      }
    }
    button {
      font-size: 14px;
      border-radius: 4px;
      padding: 0px 10px;
      display: flex;
      align-items: center;
      background: #7d40e7;
      color: #fff;
    }
  }
`;
