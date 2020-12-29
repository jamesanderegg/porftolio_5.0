import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  
`;
const ResumeLink = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #c46c00;
  }
`;
const ResumeGrid = styled.div`
  border-top: 2px solid white;
  display: grid;
  
  grid-template-columns: 1fr 1fr;
  text-align: center;
  grid-template-rows: 0.6fr 0.5fr;
  cursor: default;
`;
const ResumeItem = styled.div`
  margin: 20px;
  cursor: default;
  
`;
const OtherLink = styled.span`
  color: white;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #c46c00;
  }
`;


export default function Resume() {
  return (
    <Wrapper>
      <h2>Resume</h2>

      <ResumeGrid>
        <ResumeItem>
          <ResumeLink
            href="https://www.jamesanderegg.com/uploads/jamesAndereggResume.pdf"
            download="James_Anderegg_Resume"
          >
            <i className="far fa-file fa-4x resume-button"></i>
            <h3>Download PDF Resume</h3>
          </ResumeLink>
        </ResumeItem>
        <ResumeItem>
          <ResumeLink
            href="https://drive.google.com/file/d/1wWPpbAjWxnnl9G_siPrZ6SH0p1Gd1WH2/view?usp=sharing"
            target="_blank"
          >
            <i class="fab fa-google fa-4x"></i>
            <h3>Google Link Resume</h3>
          </ResumeLink>
        </ResumeItem>
        
        <ResumeItem
          onClick={(e) => window.open("https://github.com/jamesanderegg")}
        >
        <OtherLink>
          <i className="github fab fa-github fa-4x"></i>
          <h3>GitHub Code</h3>
          </OtherLink>
        </ResumeItem>
        <ResumeItem
          onClick={() =>
            navigator.clipboard.writeText("jamesanderegg@jamesanderegg.com")
          }
        >
        <OtherLink>
          <i className="email fas fa-at fa-4x"></i>
          <h3> Email: Copy to clickboard</h3>
          </OtherLink>
        </ResumeItem>
      </ResumeGrid>
    </Wrapper>
  );
}
