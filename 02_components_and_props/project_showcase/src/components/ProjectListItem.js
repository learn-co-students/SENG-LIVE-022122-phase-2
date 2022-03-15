function ProjectListItem({ project }) {

  // destructuring => props turning it into { project } extracting the keys of the object for which we want the values 
  return (
    <li>
      <figure>
        <img src={project.image} alt={`project: ${project.name}`} />
      </figure>
      <article>
        <h4>{project.name}</h4>
        <p>{project.about}</p>
      </article>
    </li>
  );
}

export default ProjectListItem;
