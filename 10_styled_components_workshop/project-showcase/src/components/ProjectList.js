import React, { useState } from "react";
import ProjectListItem from "./ProjectListItem";
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Button, Input, HorizontalButtonContainer, Box } from './shared';
import styled from 'styled-components';

const Cards = styled.ul`
  margin: 0 auto;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`

function ProjectList({
  projects,
  onDeleteProject,
  onUpdateProject
}) {
  const [searchText, setSearchText] = useState("");
  useDocumentTitle("Projects")

  const searchResults = projects.filter(project => {
    return (
      project.name.toLowerCase().includes(searchText.toLowerCase()) ||
      project.about.toLowerCase().includes(searchText.toLowerCase())
    );
  })

  console.log(searchResults);
  // map over the array of project objects => return an array of ProjectItem components
  // [{},{},{},{}] => [<ProjectListItem />, <ProjectListItem />, <ProjectListItem />, <ProjectListItem />]
  const projectItems = searchResults.map((project) => {
    return (
      <ProjectListItem
        key={project.id}
        {...project}
        onDeleteProject={onDeleteProject}
        onUpdateProject={onUpdateProject}
      />
    );
  });

  return (
    <Box p="2rem" d="flex" flexDirection="column" itemsCenter>
      <h2>Projects</h2>

      <HorizontalButtonContainer>
        <Button>All</Button>
        <Button>Phase 5</Button>
        <Button>Phase 4</Button>
        <Button>Phase 3</Button>
        <Button>Phase 2</Button>
        <Button>Phase 1</Button>
      </HorizontalButtonContainer>
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Cards>{projectItems}</Cards>
    </Box>
  );
}

export default ProjectList;