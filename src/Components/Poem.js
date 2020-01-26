import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const ContainerWhite = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const PoetWrapper = styled(animated.div)`
  padding: 15px;
  margin: 70px;
  font-size: 25px;
`;

export const Poem = () => {
  const props = useSpring({ to: { opacity: 1 } });
  return (
    <ContainerWhite>
      <PoetWrapper data-aos="zoom-in" data-aos-delay="350">
        Kun mä sinut kohtasin, oli ilta ihanin, basso lauloi ja kimmelsi
        Kuliksen kuu, sinä sanoit menkäämme maalle mikkelin landelle, mietin nyt
        juttu tää onnistuu.
      </PoetWrapper>
      <PoetWrapper data-aos="zoom-in" data-aos-delay="650">
        Yhteen kun muutettiin kukat kukki tuoksui niin Meri vaahtosi kuin aallot
        kuohuaa Heti rantaan kuljettiin, surffilaudat vahattiin Oli yhdessä niin
        huumaavaa
      </PoetWrapper>
      <PoetWrapper data-aos="zoom-in" data-aos-delay="950">
        Oi, jos sulle voisin antaa kaikkein kauneimman Tämän maailmani pallon
        valtavan Mutta ensin tämän teen, sinut alttarille vien, kun läheiset
        vierelläsi olla saan
      </PoetWrapper>
    </ContainerWhite>
  );
};
