import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const TextWrapper = styled.div`
  h1 {
    font-size: 24px;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 18px;
    }
  }
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

const Wrapper = styled.div`
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

const Grid = ({ data }) => (
  <Wrapper number={data.allMarkdownRemark.edges}>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link key={node.id} to={node.fields.slug}>
        <Container>
          <Overlay />
          <TextWrapper id="text">
            <h1>{node.frontmatter.title}</h1>
          </TextWrapper>
          <img src={node.frontmatter.image} alt="image1" />
        </Container>
      </Link>
    ))}
  </Wrapper>
);

export default Grid;
