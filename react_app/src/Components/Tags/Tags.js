import React from "react";
import styled from "styled-components";

const TagContainerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 4rem;
`;
const TagItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 .4rem;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  background-color: rgba(26, 91, 230, 0.8);
  font: bold 14px/1 sans-serif;
  cursor: pointer;
  &:hover {
    background-color: rgba(12, 28, 61, 0.8);
  }
`;
const TagsItem = styled.div`
  padding: 5px;
  color: white;
`;
const TagsCount = styled.div`
  padding: 5px;
  color: #333;
  background-color: whitesmoke;
`;
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
            <TagsItem id={tag}>{tag}</TagsItem>
            <TagsCount> {tagsCount[tag]}</TagsCount>
          </TagItem>
        ))}
      </TagContainerGrid>
    </>
  );
};

export default Tags;
