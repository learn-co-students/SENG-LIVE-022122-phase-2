import React,{useState} from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {
  const [searchText, setSearchText] = useState("")

  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(searchText.toLowerCase())
  })
 
  const projectItems = searchResults.map((project) => {
    return <ProjectListItem key={project.id} project={project} />;
  });

  function handleChange(e){
    setSearchText(e.target.value)
  }
 
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
    <input onChange={handleChange} type="text" placeholder="Search..."/>

    <ul className="cards">{projectItems}</ul>
  </section>
  );
}

export default ProjectList;
