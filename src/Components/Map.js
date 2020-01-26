import React from "react";
import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
`;

export const Map = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8659966580353!2d23.762818916098137!3d59.96754628188667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468da0df6cbe5e67%3A0x334f8183406a785!2sCalliola%20Conference%20%26%20Event%20Center!5e0!3m2!1sfi!2sfi!4v1580054360088!5m2!1sfi!2sfi"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen="true"
        title="map"
      ></iframe>
    </MapContainer>
  );
};
