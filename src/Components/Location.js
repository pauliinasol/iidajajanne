import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background: #faf3ed;
  display: flex;
  flex-direction: row;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  /* padding: 20px; */
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

const Image = styled.div`
  img {
    width: 00px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const WeddingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 75px;
  flex-direction: column;
`;

export const Location = () => {
  return (
    <Container>
      <Image>
        <img src={"./snappertuna.jpg"} alt={"Iida ja Janne"} />
      </Image>
      <WeddingContainer>
        <p>
          Tervetuloa todistamaan pientä suurta hetkeämme Snappertunan kirkkoon
          <b> 4.7.2020 klo 14</b>.
        </p>
      </WeddingContainer>
    </Container>
  );
};
