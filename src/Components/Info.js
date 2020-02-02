import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background: #faf3ed;
  display: flex;
  flex-direction: row;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 20px;
  a {
    color: black;
    font-weight: bold;
  }
  span {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Info = () => {
  return (
    <Container>
      <span>
        Juhlimme nyt aikuisten kesken. Autamme mielellään kysymyksissä.
        Parhaiten meidät tavoittaa osoitteesta
      </span>
      &nbsp;
      <a href="iida.e.miettinen@gmail.com">iida.e.miettinen@gmail.com</a>
    </Container>
  );
};
