import * as React from "react";

import styled from "styled-components";
import { HeadingOne } from "../Utils/utils";

const Container = styled.div`
  background-color: white;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  /* border-bottom: 1px solid #7e8687; */
`;

const NavItem = styled.div`
  padding: 10px;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Nav = ({ rightFn, mapFn }) => {
  return (
    <Container>
      <HeadingOne>Iida & Janne</HeadingOne>
      <NavItems>
        <NavItem onClick={mapFn}>PAIKKA</NavItem>
        <NavItem onClick={rightFn}>LAHJA</NavItem>
        <NavItem>
          <a href={"https://iidamiettinen.typeform.com/to/Xi6HtY"}>RSVP</a>
        </NavItem>
      </NavItems>
    </Container>
  );
};
