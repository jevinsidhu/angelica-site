import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Navbar from "../components/navbar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const Header = styled.h1`
  font-family: "D-DIN", sans-serif;
  color: white;
  font-size: 22px;
  margin-top: 20px;
`;

const Subheader = styled(Header)`
  font-size: 16px;
  margin-top: 10px;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <Navbar />
      <Wrapper>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Header>{post.frontmatter.title}</Header>
        <Subheader>{post.frontmatter.subtitle}</Subheader>
      </Wrapper>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
