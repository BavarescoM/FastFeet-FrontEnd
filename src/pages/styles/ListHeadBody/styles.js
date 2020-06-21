import styled from "styled-components";

export const Head = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px 0 20px 0;

  > li:nth-child(1) {
    margin-left: 25px;
  }
  > li:nth-last-child(1) {
    text-align: end;
    margin-right: 5px;
  }
`;
export const Body = styled.ul`
  margin-bottom: 10px;
  display: flex;
  background: #fff;
  align-items: center;

  > li {
    line-height: 60px;
    color: #666666;
    height: 57px;

    button {
      float: right;
      background: transparent;
    }
    img {
      margin-top: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  > li:nth-child(1) {
    margin-left: 25px;
  }
  > li:nth-last-child(1) {
    padding: 20px 20px;
  }
`;
