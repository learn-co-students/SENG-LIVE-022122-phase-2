import React, { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Button, Form, Input } from './shared';

function ProjectForm({ onCreateProject }) {
  const nameInputRef = useRef(null);
  const initialFormState = {
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  }
  const { formState, handleChange } = useForm(initialFormState);
  useDocumentTitle("New Project")

  useEffect(() => {
    nameInputRef.current.focus();
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = JSON.stringify({ ...formState, claps: 0 })
    onCreateProject(body)
  }

  return (
    <section>
      <Form
        className="form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <Input
          type="text"
          id="name"
          name="name"
          ref={nameInputRef}
          onChange={handleChange}
          value={formState.name}
        />

        <label htmlFor="about">About</label>
        <Input
          as="textarea"
          id="about"
          name="about"
          onChange={handleChange}
          value={formState.about}
        />

        <label htmlFor="phase">Phase</label>
        <Input
          as="select"
          name="phase"
          id="phase"
          onChange={handleChange}
          value={formState.phase}
        >
          <option value="">Select a Phase</option>
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
          onChange={handleChange}
          value={formState.link}
        />

        <label htmlFor="image">Screenshot</label>
        <Input 
          type="text" 
          id="image" 
          name="image"
          onChange={handleChange}
          value={formState.image}
        />

        <Button type="submit">Add Project</Button>
      </Form>
    </section>
  );
}

export default ProjectForm;