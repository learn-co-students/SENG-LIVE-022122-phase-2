import { useEffect, useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Box } from './shared';

function Home() {
  const [recentProjects, setRecentProjects] = useState([]);
  useDocumentTitle("Project Showcase - Home")

  useEffect(() => {
    // fetch the 3 most recently added projects from json-server
    fetch("http://localhost:4000/projects?_sort=id&_order=desc&_limit=3")
      .then((r) => r.json())
      .then((recentProjects) => {
        setRecentProjects(recentProjects);
      });
  }, []);

  return (
    <Box border p="1.75rem" mx="1.5rem">
      <h2 style={{ fontSize: "3rem" }}>View Awesome Projects.</h2>
      <p>
        Looking for someone to hire? Check out these awesome projects from
        Flatiron students.
      </p>
      <h3>Recent Projects:</h3>
      {recentProjects.map((project) => (
        <p key={project.id}>{project.name}</p>
      ))}
      <div style={{ margin: "1rem 0" }}>
        <a className="button" href="/projects">
          View All Projects
        </a>
      </div>
    </Box>
  );
}

export default Home;