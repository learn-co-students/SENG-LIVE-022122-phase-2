import React, { useState } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({
  projects,
  onDeleteProject,
  onUpdateProject
}) {
  const [searchText, setSearchText] = useState("");

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
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;