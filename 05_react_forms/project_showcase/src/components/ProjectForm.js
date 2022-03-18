import {useState} from 'react';

function ProjectForm({addProjects}) {
  const [formData, setFormData] = useState({
    name:"",
    about:"",
    phase:"",
    link:"",
    image: ""
  })
  // const [name, setName] = useState("")
  // const [about, setAbout] = useState("")
  // const [phase, setPhase] = useState("")
  // const [link, setLink] = useState("")
  // const [image, setImage] = useState("")

  const handleChange = (e) => {
    setFormData(formData => {
      return {...formData, [e.target.name]:e.target.value}
    })
  } 


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/projects',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newProject => {
      addProjects(newProject)
    })
    
  
  }

  return (
    <section>
     <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={formData.about} onChange={handleChange} />

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" value={formData.phase} onChange={handleChange}>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" value={formData.link} onChange={handleChange}/>

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange}/>

        <button type="submit">Add Project</button>           
      </form>
    </section>
  
    );
  
}

export default ProjectForm;
