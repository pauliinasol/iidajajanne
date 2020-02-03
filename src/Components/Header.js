import React, { useState } from "react";
// import iidajajanne from "../iidajajannepicedited.png";
import styled from "styled-components";
import { HeadingTwo } from "../Utils/utils";
import { animated, useSpring } from "react-spring";

const Container = styled.section`
  background: #faf3ed;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
    background-color: #85613c;
    transition: transform 1s;
    transform: scale(1.2);
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const Image = styled.div`
  img {
    width: 600px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const CallToButton = () => {
  const [state, setState] = useState(false);
  return (
    <CallToButtonStyled
      class="card"
      onClick={() => console.log("Hello world")}
      onMouseOver={() => setState({ hovered: true })}
      onMouseOut={() => setState({ hovered: false })}
    >
      <a href="https://iidamiettinen.typeform.com/to/Xi6HtY">R S V P</a>
    </CallToButtonStyled>
  );
};

export const Header = () => (
  <>
    <Container>
      <Image>
        <img
          src={process.env.PUBLIC_URL + "/iidajajannepicedited.png"}
          alt={"Iida ja Janne"}
        />
      </Image>

      <WeddingContainer>
        <HeadingTwo>
          <p>
            Tervetuloa todistamaan pientä suurta hetkeämme Snappertunan kirkkoon
            <b> 4.7.2020 klo 14</b>.
          </p>
        </HeadingTwo>
        <CallToButton />
      </WeddingContainer>
    </Container>
  </>
);
