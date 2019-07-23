import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Bird from "src/images/bird.png";
import Camera from "src/images/camera.png";

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: ${props =>
    props.isDetailedPage ? "space-between" : "flex-end"};
  align-items: center;
  z-index: 99;
  padding: 15px;
  box-sizing: border-box;
  font-family: "D-DIN", sans-serif;
`;

const SocialImg = styled.img`
  width: 20px;
  padding: 0 5px;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const BackText = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

const Navbar = ({ isDetailedPage }) => (
  <Container isDetailedPage={isDetailedPage}>
    {isDetailedPage ? (
      <Link to="/">
        <BackText>BACK</BackText>
      </Link>
    ) : null}
    <div>
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
    </div>
  </Container>
);

export default Navbar;
