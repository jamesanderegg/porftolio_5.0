import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  a {
    background-color: rgba(26, 91, 230, 0.8);
    border-radius: 3px;

    cursor: pointer;
    color: #ffffff;
    font-size: 18px;
    padding: 9px 23px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #263666;
  }
  a:hover {
    background-color: #0688fa;
  }
`;

const GoBack = ({ registerProjectLoaded }) => {
  return (
    <Wrapper>
      <Link to={`/`} onClick={registerProjectLoaded}>
        &larr; Back
      </Link>
    </Wrapper>
  );
};

export default withRouter(GoBack);
