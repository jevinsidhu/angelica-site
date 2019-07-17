import React from "react";
import styled from "styled-components";

import Bird from "src/images/bird.png";
import Camera from "src/images/camera.png";

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: 99;
  margin-left: -20px;
  margin-top: 20px;
`;

const SocialImg = styled.img`
  width: 30px;
  padding: 0 5px;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const Navbar = () => (
  <Container>
    <a
      href="https://twitter.com/angelicamilash"
      rel="noopener noreferrer"
      target="_blank"
    >
      <SocialImg src={Bird} alt="bird social" />
    </a>
    <a
      href="https://instagram.com/angelicamilash"
      rel="noopener noreferrer"
      target="_blank"
    >
      <SocialImg src={Camera} alt="camera social" />
    </a>
  </Container>
);

export default Navbar;
