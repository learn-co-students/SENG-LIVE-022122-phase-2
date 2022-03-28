import React from 'react';

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
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <div className="navigation">
        <a className="button" href="/projects">
          All Projects
        </a>
        <a className="button" href="/projects/new">
          Add Project
        </a>
        <button onClick={handleClick}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
      </div>
    </nav>
  );
}

export default Header;
