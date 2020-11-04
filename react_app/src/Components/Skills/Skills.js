import React from "react";
import Logos from "../Logos/Logos";
import WhatIDo from "../WhatIDo/WhatIdo";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 30px 0;
`;

export default function Skills() {
  return (
    <Wrapper>
      <Logos />
      <WhatIDo />
    </Wrapper>
  );
}
