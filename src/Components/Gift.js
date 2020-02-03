import React from "react";
import styled from "styled-components";

import { HeadingTwo, HeadingThree } from "../Utils/utils";

const ContainerWhite = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 75px;
  flex-direction: column;
`;

const Heading = styled.div`
  font-size: 30px;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0px;
  }
`;

export const Gift = ({ id }) => {
  return (
    <ContainerWhite id={id}>
      <img
        src={process.env.PUBLIC_URL + "/kihlauskuva.png"}
        alt="kihlaus"
        width="600px"
      />
      <RightStyled>
        <HeadingTwo>Lahjat</HeadingTwo>
        <Heading>
          Mikäli haluat muistaa meitä hääpäivänämme niin toiveenamme olisi, että
          auttaisit WWF:n kautta meille rakasta Itämerta.
        </Heading>
      </RightStyled>
    </ContainerWhite>
  );
};
