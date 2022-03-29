import React, { useState, useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

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
      <form
        className="form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameInputRef}
          onChange={handleChange}
          value={formState.name}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          onChange={handleChange}
          value={formState.about}
        />

        <label htmlFor="phase">Phase</label>
        <select
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
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          onChange={handleChange}
          value={formState.link}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image"
          onChange={handleChange}
          value={formState.image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;