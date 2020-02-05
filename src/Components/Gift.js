import React from "react";
import styled from "styled-components";

import { HeadingTwo, Paragraph, breakPointMaxMedium } from "../Utils/utils";

const ContainerWhite = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
  @media ${breakPointMaxMedium} {
    width: 100%;
  }
`;

const RightStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 50%;

  @media ${breakPointMaxMedium} {
    width: 100%;
  }
`;

export const Gift = ({ id }) => {
  return (
    <ContainerWhite id={id}>
      <Image>
        <img src={"./kihlauskuva.png"} alt="kihlaus" width="600px" />
      </Image>
      <RightStyled>
        <HeadingTwo>Lahjat</HeadingTwo>
        <Paragraph>
          Mikäli haluat muistaa meitä hääpäivänämme niin toiveenamme olisi, että
          auttaisit WWF:n kautta meille rakasta Itämerta.
        </Paragraph>
        <Paragraph>Tilinumero: FI40 5780 0710 0305 81</Paragraph>
        <Paragraph>
          Viestikenttään ”Lahjoittajan nimi / Iida Janne häät”
        </Paragraph>
      </RightStyled>
    </ContainerWhite>
  );
};
