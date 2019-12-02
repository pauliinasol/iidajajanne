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
`;

const NavItem = styled.div`
  padding: 10px;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Nav = () => {
  return (
    <Container>
      <HeadingOne>Iida & Janne</HeadingOne>
      <NavItems>
        <NavItem>LISÄTIETOA</NavItem>
        <NavItem>PAIKKA</NavItem>
        <NavItem>RSVP</NavItem>
      </NavItems>
    </Container>
  );
};
