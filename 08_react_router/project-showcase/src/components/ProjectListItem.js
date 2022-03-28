import React from "react";
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";


function ProjectListItem({
  id,
  name,
  about,
  phase,
  link,
  image,
  claps,
  onDeleteProject,
  onUpdateProject
}) {

  function handleClapClick() {
    onUpdateProject(id, JSON.stringify({claps: claps + 1}))
  }

  function handleDeleteClick() {
    onDeleteProject(id);
  }
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClapClick} className="claps">👏{claps}</button>
      </figure>

      <section className="details">
        <h4><Link to={`/projects/${id}`}>{name}</Link></h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <Link
            className="button"
            to={`/projects/${id}/edit`}
          >
            <FaPencilAlt />
          </Link>
          <button
            onClick={handleDeleteClick}
          >
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
}

export default ProjectListItem;


