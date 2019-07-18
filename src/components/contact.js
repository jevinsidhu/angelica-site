import React from "react";
import styled from "styled-components";

import Background from "src/images/bg.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;

const Text = styled.h3`
  display: flex;
  position: absolute;
  font-family: "D-DIN", sans-serif;
  color: white;
  width: 500px;
  text-align: center;
  font-size: 20px;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Text>
        I’m an independent music video director and filmmaker based in Toronto,
        Ontario. Please email me at angelicamilash@gmail.com for project
        inquires and other creative opportunities.
      </Text>
      <Image src={Background} alt="background" />
    </Wrapper>
  );
};

export default Contact;
