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
  width: 32%;
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
  width: 55%;
  justify-content: center;

  @media ${breakPointMaxMedium} {
    width: 100%;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
`;

const ContentColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
        <ContentWrapper>
          <ContentColumnWrapper>
            <Paragraph>WWF:n tilinumero: FI40 5780 0710 0305 81</Paragraph>
            <Paragraph>Viestikenttään ”Lahjoittaja/ Iida Janne häät”</Paragraph>
          </ContentColumnWrapper>
          <img src={"./wwf.png"} alt={"wwf"} width={60} />
        </ContentWrapper>
      </RightStyled>
    </ContainerWhite>
  );
};
