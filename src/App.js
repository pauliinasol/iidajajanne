import React from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { Map } from "./Components/Map";
import { Poem } from "./Components/Poem";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
  delay: 50,
  duration: 500,
  offset: 200
});

export const Container = styled.div`
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <Container>
      <Nav />
      <Header />
      <Poem />
      <Map />
    </Container>
  );
}

export default App;
