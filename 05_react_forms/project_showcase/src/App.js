import { useState } from 'react';
import './App.css';

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([])
  const [isDark, setIsDark] = useState(true)

  function fetchProjects(){
      fetch("http://localhost:4000/projects")
      .then(res => res.json())
      .then((projects) => {
        setProjects(projects)
      })
  }

  const toggleDarkMode = () => {
    setIsDark(isDark => !isDark)
  }

  const addProjects = (newProject) => {
    setProjects(projects => [...projects, newProject])
  }


  return (
    <div className={isDark ? 'App' : 'App light'}>
      <Header onToggleDarkMode={toggleDarkMode} isDark={isDark}/>
      <ProjectForm addProjects={addProjects}/>
      <button onClick={fetchProjects} >Fetch Projects</button>
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;
