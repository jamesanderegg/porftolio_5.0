import React from "react";
import styled from "styled-components";
import RandoBarChart from "../RandoBarChart";

const GridWrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.3fr;
  @media (max-width: 580px) {
    display: block;
  }
`;
const Picture = styled.img`
  display: block;
  width: 200px;
  align-self: center;
  margin: 15px auto;
  border-radius: 10px;
  grid-area: 1 / 1 / span 2;
  @media (max-width: 580px) {
      grid-area: 2/1;
      margin: 0 auto;
  }
`;
const Text = styled.div`
  text-align: center;
  align-self: center;
  display: flex;
  margin: 30px;
`;
const BarchartWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  align-self: center;
  grid-area: 2;
  width: 80%;
  min-width: 250px;
   
  /* @media (max-width: 580px) {
      grid-area: 3/1;
      margin: 0 auto;
  } */
`;
const FooterText = styled.div`
  text-align: center;
  align-self: center;
  display: flex;
  grid-area: 3 / 1 / span 2 / span 3;
  margin: 100px;
  @media (max-width: 580px) {
    grid-area: 4 / 1;
    margin: 30px;
  }
`;
export default function About() {
  return (
    <>
      <h2>About</h2>
      <GridWrapper>
        <Picture  src='https://www.jamesanderegg.com/uploads/images/profile.png'/>

        <Text>
          I am a software developer working as a freelance Data Scientist and
          Web Developer, doing business as, DataFluent. Born to think outside the
          box, attentive to detail and eager to learn. Always exploring new
          talents and challenging myself. Team orientated and lover of all
          people. Born and raised in Golden, Colorado.
        </Text>
        <BarchartWrapper>
          <h3>(DBA) DataFluent</h3>
          <RandoBarChart />
        </BarchartWrapper>
        <FooterText>
          This website was built with a Python, MySQL, Flask-backend and a
          Javascript, React front-end.
        </FooterText>
      </GridWrapper>
    </>
  );
}
