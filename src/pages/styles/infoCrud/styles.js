import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 130px;
  left: calc(50% - -30px);
  top: calc(100% + 30px);
  background: #e1e1e1;
  border-radius: 4px;
  padding: 5px 5px;
  display: ${(props) => (props.visible ? "block" : "none")};
  border: 2px solid red;

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 20px);
    top: -23px;
    width: 40px;
    height: 40px;
    background: #e1e1e1;
    transform: rotate(45deg);
    border-top: 2px solid red;
    border-left: 2px solid red;
  }
`;
export const List = styled.ul`
  > li {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    > a {
      color: #999999;
      text-align: center;
      width: 100%;
    }
  }
  > li + li {
    border-top: 1px #00000026 solid;
  }
  > li:hover {
    background: #f2f2f2;
    border: 1px solid darkolivegreen;

    a {
      color: #000;
    }
  }
`;
