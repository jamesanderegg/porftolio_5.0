import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  a {
    background-color: rgba(26, 10, 240, 0.9);
    padding: 5px;

    font: bold 20px/1 sans-serif;
    color: #ffffff;
    text-decoration: none;
  }
  a:hover {
    background-color: #333;
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
