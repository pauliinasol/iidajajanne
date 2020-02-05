import React, { useState } from "react";
import iidajajanne from "../iidajajannepicedited.png";
import styled from "styled-components";
import { HeadingTwo, HeadingThree } from "../Utils/utils";
import { animated, useSpring } from "react-spring";

const breakPoint = "(max-width: 768px)";

const Container = styled.section`
  background: #faf3ed;
  display: flex;
  flex-direction: row;
  @media ${breakPoint} {
    flex-direction: column;
  }
`;

const WeddingContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  padding: 1.4em;
  flex-direction: column;
  width: 50%;

  @media ${breakPoint} {
    text-align: center;
    align-items: center;
    width: 100%;
    padding: 2em;
  }
`;

const CallToButtonStyled = styled(animated.button)`
  background-color: #b8926a;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  color: white;
  border: 0;
  max-width: 200px;
  margin-top: 2em;

  /** make sure transition is out of the hover part so it animates out as well */
  transition: transform 500ms;

  &:hover {
    cursor: pointer;
    background-color: #85613c;
    transform: scale(1.1);
  }
`;

const Image = styled.div`
  width: 50%;
  img {
    width: 100%;
  }

  @media ${breakPoint} {
    width: 100%;
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
      <div>R S V P</div>
    </CallToButtonStyled>
  );
};

export const Header = () => (
  <>
    <Container>
      <Image>
        <img src={iidajajanne} alt={"Iida ja Janne"} />
      </Image>

      <WeddingContainer>
        <HeadingThree>
          Tervetuloa todistamaan pientä suurta hetkeämme Snappertunan kirkkoon
          <b> 4.7.2020 klo 14</b>.
        </HeadingThree>
        <CallToButton />
      </WeddingContainer>
    </Container>
  </>
);
