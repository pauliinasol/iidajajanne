import React, { useState } from "react";
import iidankutsu from "../iidankutsu.png";
import styled from "styled-components";
import { HeadingTwo } from "../Utils/utils";
import { animated, useSpring } from "react-spring";

const Container = styled.section`
  background: #f9ebe1;
  display: flex;
  flex-direction: row;
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
  font-size: 22px;
  font-weight: bold;
  border-radius: 10px;
  color: white;
  pointer-events: all;
`;

export const CallToButton = ({ children }) => {
  const [hovering, setHovering] = useState(false);

  const tooltipSpring = useSpring({
    opacity: hovering ? 1 : 0,
    transform: `translate3d(0, ${hovering ? 0 : 1}rem, 0)`,
    pointerEvents: hovering ? "all" : "none"
  });

  return (
    <CallToButtonStyled
      onMouseEnter={() => {
        console.log("Hello world");
      }}
      onMouseLeave={() => setHovering(false)}
    >
      <div style={tooltipSpring}>RSVP</div>
    </CallToButtonStyled>
  );
};

export const Header = () => (
  <Container>
    <img src={iidankutsu} width={600} height={600} alt={"Iida ja Janne"} />

    <WeddingContainer>
      <HeadingTwo>Tervetuloa juhlimaan häitämme 4.7.2020</HeadingTwo>
      <CallToButton />
    </WeddingContainer>
  </Container>
);

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

// function Card() {
//   const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
//   return (
//     <animated.div
//       class="card"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={{ transform: props.xys.interpolate(trans) }}
//     />
//   )
// }
