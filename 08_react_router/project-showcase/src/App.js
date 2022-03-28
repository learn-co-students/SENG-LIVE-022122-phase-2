import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import ProjectEditForm from './components/ProjectEditForm';
import ProjectDetail from './components/ProjectDetail';
// import { BiRefresh } from 'react-icons/bi'



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([])
  

  useEffect(() => {
    fetchProjects()
  },[])

  function fetchProjects() {
    fetch('http://localhost:4000/projects')
      .then(res => res.json())
      .then(projects => setProjects(projects))
  }

  function onToggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  function onCreateProject(body) {
    return fetch(`http://localhost:4000/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => response.json())
      .then(savedProject => {
        setProjects(projects => [...projects, savedProject])
      })
  }

  function onUpdateProject(id, body) {
    return fetch(`http://localhost:4000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(res => res.json())
      .then(updatedProject => {
        const updatedProjects = projects.map(originalProject => {
          if (updatedProject.id === originalProject.id) {
            return updatedProject;
          } else {
            return originalProject;
          }
        })
        setProjects(updatedProjects)
      })
  }

  function onDeleteProject(id) {
    console.log('deleting project with id', id)
    const updatedProjects = projects.filter(originalProject => {
      return originalProject.id !== id;
    })
    setProjects(updatedProjects)
    return fetch(`http://localhost:4000/projects/${id}`, {
      method: 'DELETE'
    })
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/new">
          <ProjectForm onCreateProject={onCreateProject} />
        </Route>
        <Route path="/projects/:id/edit">
          <ProjectEditForm onUpdateProject={onUpdateProject} />
        </Route>
        <Route path="/projects/:id">
          <ProjectDetail />
        </Route>
        <Route path="/projects">
          <ProjectList 
            projects={projects} 
            onDeleteProject={onDeleteProject}
            onUpdateProject={onUpdateProject}
          />
        </Route>        
      </Switch>
    </div>
  );
}

export default App;
