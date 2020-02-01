import React, { useState } from "react";
import styled from "styled-components";

import { HeadingTwo } from "../Utils/utils";

const ContainerWhite = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
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

export const Gift = ({ id }) => {
  return (
    <ContainerWhite id={id}>
      <img src={"./kihlauskuva.png"} alt="kihlaus" width="600px" />
      <RightStyled>
        <HeadingTwo>
          Mikäli haluat muistaa meitä hääpäivänämme niin toiveenamme olisi, että
          auttaisit WWF:n kautta meille rakasta Itämerta.
        </HeadingTwo>
      </RightStyled>
    </ContainerWhite>
  );
};
