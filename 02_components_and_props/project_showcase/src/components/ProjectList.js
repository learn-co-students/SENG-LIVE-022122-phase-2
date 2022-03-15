import ProjectListItem from "./ProjectListItem";

// I need to render ProjectListItem for every project
function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
