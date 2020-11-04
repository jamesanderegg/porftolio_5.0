import React from "react";
import styled from "styled-components";
// import "./tags.css";
const TagContainerGrid = styled.div`
  
  align-content: center;
  --auto-grid-min-size: 6rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 3px;
  text-align: center;
  white-space: nowrap;
`;
const TagItem = styled.div`
  font: bold 14px/1 sans-serif;
  color: white;
  margin: 2px;
  padding: 5px;
  background-color: rgba(26, 91, 230, 0.8);
  cursor: pointer;
  &:hover {
    background-color: rgba(12, 28, 61, 0.8);
  }
`;
const Tags = ({ tags, tagsCount, registerTag }) => {
  return (
    <>
      <h2 className="tag-title">Projects</h2>
      <h3 className="tag-title">Click the tags below to sort my work.</h3>
      <TagContainerGrid>
        <TagItem className="item" onClick={registerTag}>
          All Projects
        </TagItem>
        {tags.sort().map((tag) => (
          <TagItem key={tag} className="item" onClick={registerTag}>
            <div className="tags-button" id={tag}>
              {tag}
              <span> {tagsCount[tag]}</span>
            </div>
          </TagItem>
        ))}
      </TagContainerGrid>
    </>
  );
};

export default Tags;
