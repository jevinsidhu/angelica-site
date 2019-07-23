import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { graphql } from "gatsby";

import Navbar from "src/components/navbar";
import Favicon from "src/images/favicon.png";

const Wrapper = styled.div`
  font-family: "D-DIN", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const Header = styled.h1`
  color: white;
  font-size: 22px;
  margin-top: 20px;
  text-align: center;
`;

const Subheader = styled(Header)`
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 10px;
  text-align: center;
`;

const Frame = styled.iframe`
  width: 50vw;
  height: 30vw;
`;

const ComingSoonText = styled.h1`
  color: #000;
  padding: 100px 75px;
  text-align: center;
  background-color: #eee;
  font-size: 48px;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>angelicamilash</title>
        <meta
          name="description"
          content="angelicamilash is an independent director and filmmaker currently based in Toronto, Ontario."
        />
        <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
      </Helmet>
      <Navbar isDetailedPage />
      <Wrapper>
        {post.frontmatter.videoURL ? (
          <Frame
            src={`https://www.youtube.com/embed/${post.frontmatter.videoURL}`}
            frameborder="0"
            allowfullscreen
          ></Frame>
        ) : (
          <ComingSoonText>COMING SOON</ComingSoonText>
        )}
        <Header>{post.frontmatter.title}</Header>
        <Subheader>{post.frontmatter.subtitle}</Subheader>
        {post.frontmatter.credits.map(credit => (
          <Subheader>{credit}</Subheader>
        ))}
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
        videoURL
        credits
      }
    }
  }
`;
