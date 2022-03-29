import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header({
  isDarkMode,
  onToggleDarkMode
}) {
  
  function handleClick() {
    onToggleDarkMode()
  }

  return (
    <nav>
      <h1 className="branding">
        <Link to="/">
          <span className="logo">{"//"}</span>
          Project Showcase
        </Link>
      </h1>
      <div className="navigation">
        <NavLink className="button" exact to="/projects">
          All Projects
        </NavLink>
        <NavLink className="button" exact to="/projects/new">
          Add Project
        </NavLink>
        <button onClick={handleClick}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
      </div>
    </nav>
  );
}

export default Header;
