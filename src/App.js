import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { Map } from "./Components/Map";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Map />
    </>
  );
}

export default App;
