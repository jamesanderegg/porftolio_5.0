import React from "react";

import styled from "styled-components";
import "./projectCard.css";
import { Link } from "react-router-dom";

const GalleryGrid = styled.div`
  --auto-grid-min-size: 14rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
`;
const ItemCard = styled.div`
  text-align: center;
  width: 220px;
  height: 310px;
  -webkit-perspective: 800px; /* ? */
  perspective: 800px;
  margin: 5px auto;
`;
const TitleText = styled.h4`
  margin-top: 40%;
  text-decoration: underline;
  text-align: center;
  color: #fff;
`;
const SubText = styled.h3`
  text-align: center;
  color: #fff;
`;

const TagGrid = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  margin-bottom: 1rem;
  justify-content: center;
  text-align: center;
`;
const Tag = styled.span`
  background-color: rgba(16, 8, 116, 0.9);
  padding: 3px;
  margin: 1px;
  font: bold 12px/1 sans-serif;
  color: #fff;
`;
const ToolList = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  list-style-position: inside;
  text-align: start;
  margin: 0;
  padding-left: 8px;
`;
const Tool = styled.li`
  color: #333;
  font-size: 14px;
  text-decoration: bold;
`;

const CardGrid = styled.div`
  border: 3px solid #fff;
  box-shadow: inset 0 0 0 2000px rgba(36, 23, 0, 0.3);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Github = styled.a`
  color: #333;
`;
const BackTitle = styled.h4`
  text-decoration: underline;
  font-style: bold;
  text-align: start;
  margin: 0;
  padding: 3px;
`;
const ToolsTitle = styled.h5`
  font-style: bold;
  text-decoration: underline;
  text-align: start;
  margin: 0;
  padding: 3px;
`;
const Description = styled.p`
  font: 12px/1 sans-serif;
  text-align: start;
  padding: 4px;
  margin: 0 auto;
  width: 90%;
`;
const Outline = styled.div`
  border: 2px solid #333;
  margin: 5px;
  padding: 4px;
`;
const LinksGrid = styled.span`
  position: fixed;
  bottom: 20px;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 95%;
  height: 90px;
`;
const ButtonsText = styled.p`
  margin: 0px;
  padding: 0px;
`;
const DenverLink = styled.a`
  display: block;
  margin: 10px;
  text-align: start;
  color: rgba(16, 8, 116, 1);
`
const ProjectLinks = styled.span`
  color: #7a2301;
` 

const ProjectCard = ({ projectList, setLoadedProject }) => {
  return (
    <GalleryGrid>
      {projectList.map((project) => (
        <ItemCard key={project.id}>
          <input type="checkbox" id={project.id} />
          <label className="card" key={project.id} htmlFor={project.id}>
            <CardGrid
              className="front front-overlay"
              style={{ backgroundImage: `url(${project.image}) ` }}
            >
              <TitleText>{project.name}</TitleText>
              <SubText>{project.type}</SubText>
              <TagGrid>
                {project.tags.split(",").map((tag) => {
                  return <Tag key={`tag-${tag}`}>{tag}</Tag>;
                })}
              </TagGrid>
            </CardGrid>

            <div className="back">
              <Outline>
                <BackTitle>{project.name}</BackTitle>
                <Description>{project.description}</Description>
                <ToolsTitle>Tools:</ToolsTitle>
                <ToolList>
                  {project.tools.split(",").map((tool) => {
                    return <Tool key={`tool-${tool}`}>{tool}</Tool>;
                  })}
                </ToolList>
                {project.id == "denver-dashboard" ? (
                  <DenverLink
                    href={project.resources}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Denver Open Data
                  </DenverLink>
                ) : null}
                <LinksGrid>
                  <Github
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-github fa-2x"></i>{" "}
                    <ButtonsText>Source Code</ButtonsText>
                  </Github>
                  {project.website ? (
                    <a
                      href={project.website}
                      rel="noopener noreferrer"
                      target="_blank" style={{color: '#7a2301'}}
                    >
                    <ProjectLinks>
                      <i class="fas fa-angle-double-right fa-2x"></i>
                      <ButtonsText>Client Website</ButtonsText>
                      </ProjectLinks>
                    </a>
                  ) : null}

                  {project.component ? (
                    <Link
                      to={`/${project.id}`}
                      className="load-SubDescription"
                      onClick={setLoadedProject}
                      style={{color: '#7a2301'}}
                    >
                    <ProjectLinks>
                      <i class="fas fa-angle-double-right fa-2x"></i>
                      <ButtonsText>Open Project</ButtonsText>
                      </ProjectLinks>
                    </Link>
                  ) : null}
                </LinksGrid>
              </Outline>
            </div>
          </label>
        </ItemCard>
      ))}
    </GalleryGrid>
  );
};

export default ProjectCard;
