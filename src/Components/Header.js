import React from "react";
import iidajajanne from "../iidajajannepicedited.png";
import styled from "styled-components";
import { HeadingTwo } from "../Utils/utils";
import { animated, useSpring } from "react-spring";

const Container = styled.section`
  background: #f9ebe1;
  display: flex;
  flex-direction: row;
`;

const ContainerWhite = styled.section`
  display: flex;
  flex-direction: row;
`;

const PoetWrapper = styled.div`
  padding: 15px;
  margin: 70px;
  font-size: 25px;
`;

const WeddingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 75px;
  flex-direction: column;
`;

const CallToButtonStyled = styled(animated.div)`
  background-color: #b8926a;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  color: white;
  pointer-events: all;
  &:hover {
    cursor: pointer;
  }
`;

export const CallToButton = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 25,
    1.1
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <CallToButtonStyled
      class="card"
      onClick={() => console.log("Hello world")}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div>R S V P</div>
    </CallToButtonStyled>
  );
};

export const Header = () => (
  <>
    <Container>
      <img src={iidajajanne} width={700} alt={"Iida ja Janne"} />

      <WeddingContainer>
        <HeadingTwo>
          <p>
            Tervetuloa todistamaan pientä suurta hetkeämme Snappertunan kirkkoon
            <b> 4.7.2020 klo 14</b>.
          </p>
          <p>
            Juhlimme nyt aikuisten kesken. Autamme mielellään kysymyksissä.
            Parhaiten meidät tavoittaa osoitteesta iida.e.miettinen@gmail.com
          </p>
        </HeadingTwo>
        <CallToButton />
      </WeddingContainer>
    </Container>
    <ContainerWhite>
      <PoetWrapper>
        Kun mä sinut kohtasin, oli ilta ihanin, basso lauloi ja kimmelsi
        Kuliksen kuu, sinä sanoit menkäämme maalle mikkelin landelle, mietin nyt
        juttu tää onnistuu.
      </PoetWrapper>
      <PoetWrapper>
        Yhteen kun muutettiin kukat kukki tuoksui niin Meri vaahtosi kuin aallot
        kuohuaa Heti rantaan kuljettiin, surffilaudat vahattiin Oli yhdessä niin
        huumaavaa
      </PoetWrapper>
      <PoetWrapper>
        Oi, jos sulle voisin antaa kaikkein kauneimman Tämän maailmani pallon
        valtavan Mutta ensin tämän teen, sinut alttarille vien, kun läheiset
        vierelläsi olla saan
      </PoetWrapper>
    </ContainerWhite>
  </>
);
