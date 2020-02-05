import React, { useState } from "react";
import iidajajanne from "../iidajajannepicedited.png";
import styled from "styled-components";
import { HeadingThree, breakPointMaxMedium } from "../Utils/utils";
import { animated } from "react-spring";

const Container = styled.section`
  background: #faf3ed;
  display: flex;
  flex-direction: row;
  @media ${breakPointMaxMedium} {
    flex-direction: column;
  }
`;

const WeddingContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  padding: 2em;
  flex-direction: column;
  width: 50%;

  @media ${breakPointMaxMedium} {
    text-align: center;
    align-items: center;
    width: 100%;
    padding: 8em 2em;
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
  a {
    color: white;
    text-decoration: none;
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

export const CallToButton = () => {
  const [, setState] = useState(false);
  return (
    <CallToButtonStyled
      class="card"
      onClick={() => console.log("Hello world")}
      onMouseOver={() => setState({ hovered: true })}
      onMouseOut={() => setState({ hovered: false })}
    >
      <a href={"https://iidamiettinen.typeform.com/to/Xi6HtY"}>R S V P</a>
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
