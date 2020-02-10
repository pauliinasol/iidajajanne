import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #faf3ed;
  display: flex;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 22px;
  a {
    color: black;
    font-weight: bold;
  }

  /* @media (max-width: 768px) {
    flex-direction: column;
  } */
`;

export const Info = () => {
  return (
    <Container>
      Juhlimme nyt aikuisten kesken. Autamme mielellään kysymyksissä. Parhaiten
      meidät tavoittaa osoitteesta: &nbsp; iida.e.miettinen@gmail.com"
    </Container>
  );
};
