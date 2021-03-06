import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Button, Input, Form } from './shared';

function ProjectEditForm({ onUpdateProject }) {
  const {
    formState,
    setFormState,
    handleChange
  } = useForm({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  })
  const { name, about, phase, link, image } = formState;

  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState("Edit Project");
  useDocumentTitle(title);

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then(res => res.json())
      .then(project => {
        setTitle(`Editing Project: ${project.name}`);
        setFormState(project)
      })
  }, [id, setFormState])

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateProject(id, JSON.stringify(formState)).then(() => {
      history.push("/projects")
    })
  }
  
  return (
    <Form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Project</h3>

      <label htmlFor="name">Name</label>
      <Input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="about">About</label>
      <Input
        as="textarea"
        id="about"
        name="about"
        value={about}
        onChange={handleChange}
      />

      
      <label htmlFor="phase">Phase</label>
      <Input
        as="select"
        name="phase"
        id="phase"
        value={phase}
        onChange={handleChange}
      >
        <option value="1">Phase 1</option>
        <option value="2">Phase 2</option>
        <option value="3">Phase 3</option>
        <option value="4">Phase 4</option>
        <option value="5">Phase 5</option>
      </Input>

      <label htmlFor="link">Project Homepage</label>
      <Input
        type="text"
        id="link"
        name="link"
        value={link}
        onChange={handleChange}
      />

      
      <label htmlFor="image">Screenshot</label>
      <Input
        type="text" 
        id="image" 
        name="image"
        value={image}
        onChange={handleChange}
      />

      <Button type="submit">Update Project</Button>
    </Form>
  )
}

export default ProjectEditForm