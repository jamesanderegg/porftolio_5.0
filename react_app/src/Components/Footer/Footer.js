import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

  text-align: center;

`;

const Copyright = styled.span`
    
    justify-items:center;
    align-items:center;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Copyright>
        <h3>&#169; James Anderegg 2020</h3>
      </Copyright>
      <span>
        <h4>(DBA) DataFluent</h4>
        
      </span>
    </Wrapper>
  );
}
