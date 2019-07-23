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
  font-family: "D-DIN", sans-serif;
  color: white;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 30px;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Contact = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>
          I’m an independent filmmaker currently based in Toronto, Ontario.
        </Text>
        <Text>
          Please email me at <Bold>angelicamilash@gmail.com</Bold> for work
          inquires and other creative opportunities.
        </Text>
      </TextWrapper>
      <Image src={Background} alt="background" />
    </Wrapper>
  );
};

export default Contact;
