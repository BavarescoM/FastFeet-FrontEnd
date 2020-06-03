import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #7d40e7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Content = styled.div`
  margin: 30px 30px;
  background: #fff;
  width: 360px;
  height: 425px;
  display: flex;

  form {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
  }
  img {
    width: 80%;
    margin: 30px 20px;
  }
  label {
    margin-top: 20px;
    font-weight: bold;
    color: #444444;
  }

  input {
    margin-top: 5px;
    padding: 10px;
    color: #999999;
    border: 1px solid #dddddd;
    border-radius: 4px;
    &:focus {
      border: 2px solid #7159c1;
      &::placeholder {
        opacity: 0;
      }
    }
  }

  button {
    margin-top: 30px;
    padding: 10px;

    background: #7d40e7;
    border-radius: 4px;
    opacity: 1;
    color: #fff;
  }
`;
