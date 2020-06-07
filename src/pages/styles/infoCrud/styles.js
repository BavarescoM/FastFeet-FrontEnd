import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 130px;
  left: calc(50% - -30px);
  top: calc(100% + 30px);
  background: #e1e1e1;
  border-radius: 4px;
  padding: 0px 5px;
  display: ${(props) => (props.visible ? "block" : "none")};

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #e1e1e1;
  }
`;
export const List = styled.ul`
  > li {
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

    a {
      color: #000;
    }
  }
`;
