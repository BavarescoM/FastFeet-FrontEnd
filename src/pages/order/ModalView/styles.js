import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.visible ? "flex" : "none")};

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  border-radius: 4px;
  width: 450px;
  background: #ffffff;
  .close {
    background: red;
    color: white;
    float: right;
    height: 50px;
    width: 50px;
    transform: translate(20px, -20px);
    border-radius: 30px;
    font-size: 30px;
    &:hover {
      color: #fafafa;
      background: rgb(200, 0, 0);
    }
  }
  .quebra {
    margin: 20px;

    .black {
      font-weight: bold;
    }
    .black,
    hr,
    p {
      margin-bottom: 6px;
    }
  }
`;
