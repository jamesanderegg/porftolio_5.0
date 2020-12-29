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
  justify-content:center;
  text-align: center;
`;
const Tag = styled.span`
  background-color: rgba(16, 8, 116, 0.9);
  padding: 3px;
  margin: 1px;
  font: bold 12px/1 sans-serif;
  color: #fff;
`;
const DescriptionGrid = styled.span`
  display: grid;
  height: 180px;
  grid-template-columns: 1fr;
`;

const LinksContainerGrid = styled.span`
  align-content: center;
  display: grid;
  grid-gap: 3px;
  text-align: center;
`;
const LinkTag = styled.span`
  font: bold 14px/1 sans-serif;
  color: white;
  padding: 5px;
  background-color: rgba(26, 10, 240, 0.9);
  cursor: pointer;
  &:hover {
    background-color: rgba(12, 28, 61, 0.8);
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
const CardGrid = styled.div`
  border: 3px solid #fff;

  box-shadow: inset 0 0 0 2000px rgba(36, 23, 0, 0.6);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
`;
const SubDescription = styled.p`
  text-align: center;
  margin: auto;
  background-color: #383838;
  color: white;
  width: 90%;
  padding: 5px;
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
              
              <h3>{project.name}</h3>
              <SubDescription>
                <p>{project.description}</p>
              </SubDescription>
              <LinksContainerGrid>
                <LinkTag>
                  <a
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.urlText}
                  </a>
                </LinkTag>
                {project.website ? (
                  <LinkTag>
                    <a
                      href={project.website}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Client Website
                    </a>
                  </LinkTag>
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
              </LinksContainerGrid>
              <i class="fab fa-github fa-2x"></i>
            </div>
          </label>
        </ItemCard>
      ))}
    </GalleryGrid>
  );
};

export default ProjectCard;
