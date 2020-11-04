import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #333;
text-align: center;
`;
const Title = styled.h1`
`;
const Paragraph = styled.div`
  
  margin: 30px;
`;

const DenverShootings = () => {
  return (
    <Wrapper>
      <Title>Denver Officer Involved Shootings</Title>
      <Paragraph>
        The data comes from the,{" "}
        <a href="https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-denver-police-officer-involved-shootings">
          City of Denver Open Data Catalog
        </a>{" "}
        and has clearly indicated the terms of using this work at{" "}
        <a href="http://creativecommons.org/licenses/by/3.0/">
          http://creativecommons.org/licenses/by/3.0/
        </a>
      </Paragraph>
      <Paragraph>I recreated the dashboard the city of Denver has provided and made it clickable and dynamic and also added a few extra visuals.  Microsoft Power Bi hosts the project and provides a sharable link.  The dashboards can also require authentication if needed.</Paragraph>
      <h2>Click the dashboard, it is dynamic.</h2>
      <iframe
      style={{ cursor: 'pointer'}}
        width="100%"
        height="1060"
        src="https://app.powerbi.com/view?r=eyJrIjoiZjRiMDA5ZmYtYzk2ZS00OTIzLTg5MjAtMjg4OTRlMTQ1ZGRkIiwidCI6Ijc5YTUxMDViLTcyMTUtNDg5My1hY2E2LTlhZTQxMTQ2M2ZkOSIsImMiOjZ9&pageName=ReportSection6f39f6667ec1bec9948e"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </Wrapper>
  );
};

export default DenverShootings;
