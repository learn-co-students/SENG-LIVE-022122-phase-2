import React from "react";
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, buttonBase, Card } from './shared';

const EditLink = styled(Link)`
${buttonBase}
`

const ProjectImage = styled.figure`
  max-height: 200px;
  overflow: hidden;
  position: relative;
  & img {
    width: 100%;
    height: 175px;
    object-fit: cover;
  }
`

const ClapButton = styled(Button)`
  color: transparent;
  text-shadow: 0 0 0 var(--turquoise);
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover, &:focus {
    color: transparent;
    text-shadow: 0 0 0 var(--color);
  }
`

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
    console.log('delete me!')
    
    onDeleteProject(id);
  }
  return (
    <Card>
      <ProjectImage>
        <img src={image} alt={name} />
        <ClapButton onClick={handleClapClick} className="claps">👏{claps}</ClapButton>
      </ProjectImage>

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
          <EditLink
            className="button"
            to={`/projects/${id}/edit`}
          >
            <FaPencilAlt />
          </EditLink>
          <Button
            onClick={handleDeleteClick}
          >
            <FaTrash />
          </Button>
        </div>
      </footer>
    </Card>
  );
}

export default ProjectListItem;


