import styled from "styled-components";

export const Container = styled.div`
  margin: auto;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
    img {
      height: 120px;
      width: 120px;
      border: 3px dotted gray;
      border-radius: 50%;
    }
    input {
      display: none;
    }
  }
`;
