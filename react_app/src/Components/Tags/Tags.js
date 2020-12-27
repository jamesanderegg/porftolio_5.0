import React from "react";
import styled from "styled-components";

const TagContainerGrid = styled.div`
  border: 1px solid red;
  align-content: center;
  --auto-grid-min-size: 6rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 3px;
  
  white-space: nowrap;
`;
const TagItem = styled.div`
  text-align: center;
  border: 1px solid orange;
  display: grid;
  grid-template-columns: 1fr 15px;
  grid-gap: 3px;
  margin: 3px;
  padding: 5px;
  font: bold 14px/1 sans-serif;
  color: white;
  background-color: rgba(26, 91, 230, 0.8);
  cursor: pointer;
  &:hover {
    background-color: rgba(12, 28, 61, 0.8);
  }
`;
const TagsItem = styled.div`
  
`
const TagsCount = styled.div`
  color: #333;
  border-radius: 2px;
  background-color: whitesmoke;
`
const Tags = ({ tags, tagsCount, registerTag, projectsList }) => {
  
  return (
    <>
      
      <TagContainerGrid>
        <TagItem onClick={registerTag}>
          <TagsItem>all</TagsItem>
          <TagsCount>{projectsList.length}</TagsCount>
        </TagItem>
        {tags.sort().map((tag) => (
          <TagItem key={tag} onClick={registerTag}>
            <TagsItem id={tag}>
              {tag}
              
            </TagsItem>
            <TagsCount> {tagsCount[tag]}</TagsCount>
          </TagItem>
        ))}
      </TagContainerGrid>
    </>
  );
};

export default Tags;
