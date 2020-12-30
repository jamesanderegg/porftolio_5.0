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
`;
const Tool = styled.li`
  margin: 1px;
  font: bold 12px/1 sans-serif;
  color: #333;
`;

const CardGrid = styled.div`
  border: 3px solid #fff;

  box-shadow: inset 0 0 0 2000px rgba(36, 23, 0, 0.3);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Description = styled.div`
  color: #333;
  width: 99%;
  padding: 15px;
  border: 1px solid red;
  margin: 10px auto;
`;
const Github = styled.a`
  color: #333;
  border: 1px solid aqua;
`;

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
              <ToolList>
              {project.tools.split(",").map((tool) => {
                return <Tool key={`tool-${tool}`}>{tool}</Tool>
              })}
              </ToolList>
              <Github
                href={project.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-github fa-2x"></i> Source Code
              </Github>

              {project.description}

              {project.website ? (
                <a
                  href={project.website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Client Website
                </a>
              ) : null}

              {project.component ? (
                <Link
                  to={`/${project.id}`}
                  className="load-SubDescription"
                  onClick={setLoadedProject}
                >
                  Load {project.type}
                </Link>
              ) : null}

           
            </div>
          </label>
        </ItemCard>
      ))}
    </GalleryGrid>
  );
};

export default ProjectCard;
