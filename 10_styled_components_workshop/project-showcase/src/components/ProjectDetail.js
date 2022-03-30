import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Box } from './shared';

function ProjectDetail({ onUpdateProject }) {
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [documentTitle, setDocumentTitle] = useState("Project Details");
  useDocumentTitle(documentTitle)
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((r) => r.json())
      .then((project) => {
        setProject(project); 
        setDocumentTitle(`Project Details - ${project.name}`);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { image, name, about, link, phase } = project;

  function handleClapClick() {
    onUpdateProject(id, JSON.stringify({claps: project.claps + 1}))
  }

  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={name} />
          <button className="claps" onClick={handleClapClick}>
            👏{project.claps}
          </button>
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{about}</p>
          {link ? (
            <p>
              <a target="_blank" rel="noreferrer" href={link}>
                Project Homepage
              </a>
            </p>
          ) : null}
          <div className="extra">
            <span className="badge blue">Phase {phase}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;