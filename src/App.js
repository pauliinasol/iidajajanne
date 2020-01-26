import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { Map } from "./Components/Map";
import { Poem } from "./Components/Poem";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Poem />
      <Map />
    </>
  );
}

export default App;
