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

  > div {
    padding: 30px 0px;
    font-size: 24px;
    font-weight: 700;
    display: flex;

    > button,
    a {
      display: flex;
      align-items: center;

      padding: 5px 10px;
      color: white;
      font-size: 14px;
      border-radius: 4px;
      > svg {
        padding: 2px 2px;
      }
    }

    > a:nth-child(1) {
      margin-right: 20px;
      background: #cccccc;
    }
    > button:nth-child(2) {
      background: #7d40e7;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 4px;
  margin: 0 20%;
  padding: 30px 30px;
  background: #fff;
  > label {
    margin-bottom: 3px;
    margin-top: 10px;
    font-weight: 700;
  }

  div.line {
    font-weight: 700;
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  input,
  select,
  option {
    padding: 12px 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;
