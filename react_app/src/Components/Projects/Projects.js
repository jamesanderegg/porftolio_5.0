import React, { useState } from "react";
import projectsMap from "../../utilities/projectsMap";
import Tags from "../Tags/Tags";
import ProjectCard from "../ProjectCard/ProjectCard";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 90vh;
`;
const Title = styled.h2``;
const SubTitle = styled.ul`
  font-style: italic;
`;

export default function Projects() {
  const _ = require("lodash");
  const [tagProject, setTagProject] = useState("");
  const [loadedProject, setLoadedProject] = useState(false);

  const registerProjectLoaded = (e) => {
    setLoadedProject((prevState) => {
      return !prevState;
    });
  };

  const registerTag = (e) => {
    if (e.target.id === "all") {
      setTagProject("");
      return;
    }
    setTagProject(e.target.id);
  };
  let tags = [];
  let projectsList = [];
  _.each(projectsMap, (edge) => {
    if (_.get(edge, "tags")) {
      tags = tags.concat(edge.tags.split(", "));

      if (edge.tags.includes(tagProject)) {
        projectsList = projectsList.concat(edge);
      }
    }
  });

  let tagCounts = {};
  tags.forEach((tag) => {
    //conditional if it doesnt exist make it 0 or add 1.
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });

  tags = _.uniq(tags);

  return (
    <Wrapper>
      <Title>My Projects:</Title>
      <SubTitle>
        <li>Click the tags at the top to sort the projects.</li>
        <li>Click the card projects to flip them for more information.</li>
      </SubTitle>
      <Tags tags={tags} tagsCount={tagCounts} registerTag={registerTag} projectsList={projectsList}/>
      <ProjectCard
        projectList={projectsList}
        setLoadedProject={registerProjectLoaded}
      />
    </Wrapper>
  );
}
