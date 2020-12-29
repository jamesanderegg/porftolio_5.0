import React from "react";

import styled from "styled-components";
import "./projectCard.css";
import { Link } from "react-router-dom";

const GalleryGrid = styled.div`
  --auto-grid-min-size: 14rem;
  display: grid;
  border: 1px solid red;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
`;
const ItemCard = styled.div`
  border: 1px solid blue;
  text-align: center;
  width: 220px;
  height: 310px;
  -webkit-perspective: 800px; /* ? */
  perspective: 800px;
  margin: 5px auto;
`;
const ItemBoldText = styled.h4`
  text-decoration: underline;
  text-align: center;
  margin: 5px;
  width: 90%;
  color: #333;
  border: 1px solid blue;
`;
const Image = styled.img`
  width: 100%;
  height: 83%;
`;

const TagGrid = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  white-space: nowrap;
  text-align: center;
`;
const Tag = styled.span`
  background-color: rgba(26, 10, 240, 0.9);
  padding: 2px;
  margin: 1px;
  font: bold 12px/1 sans-serif;
  color: #ffffff;
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
  display: grid;
  border: 1px solid red;
  grid-template-rows: 42px 100% 1fr;
`;
const CardBody = styled.span`
  display: grid;
  border: 1px solid blue;
  grid-template-columns: 1fr 1fr;
`;

const ProjectCard = ({ projectList, setLoadedProject }) => {
  return (
    <GalleryGrid>
      {projectList.map((project) => (
        <ItemCard key={project.id}>
          <input type="checkbox" id={project.id} />
          <label className="card" key={project.id} htmlFor={project.id}>
            <div className="front front-overlay" style={{backgroundImage: `url(${project.image})`}}>
            {/* <Image src={project.image} alt={project.id} /> */}
            <ItemBoldText>{project.name}</ItemBoldText>
              {/* <ItemBoldText>{project.name}</ItemBoldText>
              
              <CardBody style={{backgroundImage: project.image }}>
                <Image src={project.image} alt={project.id} />
                <TagGrid>
                {project.tags.split(",").map((tag) => {
                  return <Tag key={`tag-${tag}`}>{tag}</Tag>;
                })}
              </TagGrid>
              </CardBody> */}
            </div>
            
            <div className="back">
              <ItemBoldText>{project.name}</ItemBoldText>
              <TagGrid>
                {project.tags.split(",").map((tag) => {
                  return <Tag key={`tag-${tag}`}>{tag}</Tag>;
                })}
              </TagGrid>
              <DescriptionGrid>
                <p>{project.description}</p>
              </DescriptionGrid>
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
                    className="load-button"
                    onClick={setLoadedProject}
                  >
                    Load {project.type}
                  </Link>
                ) : null}
              </LinksContainerGrid>
            </div>
          </label>
        </ItemCard>
      ))}
    </GalleryGrid>
  );
};

export default ProjectCard;
