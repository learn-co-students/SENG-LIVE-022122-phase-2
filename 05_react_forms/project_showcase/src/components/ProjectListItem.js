import React,{useState} from "react";

function ProjectListItem({ project }) {
  const { image, name, about, link, phase } = project;
  const [claps, setClaps] = useState(0)

  function handleClaps(){
    setClaps(claps => claps+1)
  }
 
  return (
    <li className="card">
      <div className="image">
        <img src={image} alt={name} />
        <button onClick={handleClaps} className="claps">👏{claps}</button>
      </div>
      <div className="details">
        <h4>{name}</h4>
        {about && <p>{about}</p>}
        {link ? 
          <p>
            <a href={link}>Link</a>
          </p>
         : null}
      </div>
      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}

export default ProjectListItem;