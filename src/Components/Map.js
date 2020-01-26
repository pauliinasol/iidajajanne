import React from "react";
import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
`;

export const Map = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15301.12361199119!2d22.900630657375952!3d61.355061324417356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46893475b9e1d64b%3A0xa00b553b98f0fb0!2sKalliala%2C%2038210%20Sastamala!5e0!3m2!1sfi!2sfi!4v1580021767888!5m2!1sfi!2sfi"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen="true"
        title="map"
      ></iframe>
    </MapContainer>
  );
};
