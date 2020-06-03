import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20%;

  div {
    padding: 30px 0px;
    font-size: 24px;
    font-weight: 700;
    display: flex;

    button {
      display: flex;
      align-items: center;

      padding: 5px 10px;
      color: white;
      font-size: 14px;
      border-radius: 4px;
      svg {
        padding: 2px 2px;
      }
    }
    button:nth-child(1) {
      margin-right: 20px;
      background: #cccccc;
    }
    button:nth-child(2) {
      background: #7d40e7;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  margin: 0 20%;
  padding: 30px 30px;
  background: #fff;

  input {
    width: ${(props) => (props.width ? "with%" : "100%")};
  }
`;
