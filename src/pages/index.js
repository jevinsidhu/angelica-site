import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";

import Video from "src/images/video.mp4";

import Navbar from "../components/navbar";

const Grid = styled.div`
  display: grid;
  ${props => `grid-template-rows: repeat(${props.number}, 1fr);`}
  overflow: hidden;
  cursor: pointer;

  img {
    width: 125%;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  opacity: 0;
`;

const Container = styled.div`
  position: relative;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  div:first-child {
    transition: opacity 0.5s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  #text {
    color: white;
    font-family: "D-DIN", sans-serif;
    position: absolute;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
    text-align: center;
    pointer-events: none;
  }

  &:hover #text {
    opacity: 1;
  }
`;

const TextWrapper = styled.div`
  h1 {
    font-size: 24px;
  }

  h3 {
    font-size: 16px;
    padding-top: 8px;
  }
`;

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
  width: 100%;
  background-color: #231f20;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    font-family: "D-DIN", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
  }
`;

export default ({ data }) => (
  <>
    <Navbar />
    <TopWrapper>
      <VideoPlayer muted autoPlay loop>
        <source src={Video} type="video/mp4" />
      </VideoPlayer>
    </TopWrapper>
    <Bar>
      <h1>angelicamilash</h1>
    </Bar>
    <Grid number={data.allMarkdownRemark.edges}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link key={node.id} to={node.fields.slug}>
          <Container>
            <Overlay />
            <TextWrapper id="text">
              <h1>{node.frontmatter.title}</h1>
              <h3>{node.frontmatter.subtitle}</h3>
            </TextWrapper>
            <img src={node.frontmatter.image} alt="image1" />
          </Container>
        </Link>
      ))}
    </Grid>
  </>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
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
