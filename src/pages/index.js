import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { graphql } from "gatsby";

import Video from "src/images/video.mp4";
import Logo from "src/images/logo.png";
import Favicon from "src/images/favicon.png";

import Navbar from "../components/navbar";
import Grid from "../components/grid";
import Contact from "../components/contact";

const TopWrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: linear-gradient(300deg, #f28089, #68e0db, #f28089);
  background-size: 800% 800%;
  -webkit-animation: GradientMotion 5s ease infinite;
  -moz-animation: GradientMotion 5s ease infinite;
  -o-animation: GradientMotion 5s ease infinite;
  animation: GradientMotion 5s ease infinite;

  h1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 64px;
    color: white;
  }
`;

const VideoPlayer = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #000;
  padding: 10px 20px;
  box-sizing: border-box;

  h1 {
    font-family: "D-DIN", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
  }
`;

const NameLogo = styled.img`
  width: 150px;
`;

const LinkText = styled.h3`
  font-family: "D-DIN", sans-serif;
  color: ${props => (props.highlight ? "white" : "grey")};
  margin: 0 10px;
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
`;

const LinkWrapper = styled.div`
  display: flex;
`;

const Index = ({ data }) => {
  const [isWork, setIsWork] = useState(true);

  const changeWork = () => {
    setIsWork(true);
  };
  const changeContact = () => {
    setIsWork(false);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Angelica Milash</title>
        <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
      </Helmet>
      <Navbar />
      <TopWrapper>
        <VideoPlayer playsinline muted autoPlay loop>
          <source src={Video} type="video/mp4" />
        </VideoPlayer>
      </TopWrapper>
      <Bar>
        <NameLogo src={Logo} alt="logo" />
        <LinkWrapper>
          <LinkText highlight={isWork} onClick={changeWork}>
            WORK
          </LinkText>
          <LinkText highlight={!isWork} onClick={changeContact}>
            CONTACT
          </LinkText>
        </LinkWrapper>
      </Bar>
      {isWork ? <Grid data={data} /> : <Contact />}
    </>
  );
};

export default Index;

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
