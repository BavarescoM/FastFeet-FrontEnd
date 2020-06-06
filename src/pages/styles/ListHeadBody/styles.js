import styled from "styled-components";

export const Head = styled.ul`
  display: flex;
  align-items: center;  
  margin: 20px  0 20px 0;
  
  >li:nth-child(1) {
    
    margin-left: 25px;
  }
  >li:nth-last-child(1) {
    text-align: end;
    margin-right: 5px;

  }
  
`;
export const Body = styled.ul`
  margin-bottom: 10px;
  display: flex;  
  background: #fff;

  >li { 
    color: #666666;
    padding: 20px 2px;
    height: 57px;

    button {
      float: right;
      background: transparent;
      
    }
  }
  >li:nth-child(1) {
    margin-left: 25px;
  }
  >li:last-child(1) {
    align-items: flex-end;
  }
`;
