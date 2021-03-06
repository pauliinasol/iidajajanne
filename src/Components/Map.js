import React from "react";
import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #faf3ed;
  display: flex;
  display: inline-block;
  overflow: hidden;
  iframe {
    position: relative;
    top: -50px;
    border: none;
    bottom: 50px;
  }
`;

export const Map = ({ id }) => {
  return (
    <MapContainer id={id}>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1YrCZXGb7B_8CC_AkKQo08J2Iehp6z7nK"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen="true"
        title="map"
      ></iframe>
    </MapContainer>
  );
};
