import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { Map } from "./Components/Map";
import { Poem } from "./Components/Poem";
import { Info } from "./Components/Info";
import { Gift } from "./Components/Gift";

AOS.init({
  once: true,
  delay: 50,
  duration: 500,
  offset: 200
});

const scrollIntoElem = id => () =>
  document
    .getElementById(id)
    .scrollIntoView({ behavior: "smooth", block: "center" });

export const Container = styled.div`
  @media (max-width: 600px) {
    width: 600px;
  }
`;

function App() {
  return (
    <Container>
      <Nav rightFn={scrollIntoElem("gift")} />
      <Header />
      <Poem />
      <Map />
      <Gift id="gift" />
      <Info />
    </Container>
  );
}

export default App;
