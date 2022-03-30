import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from "styled-components";
import { Button, buttonBase, HorizontalButtonContainer } from './shared';


function Header({
  isDarkMode,
  onToggleDarkMode
}) {
  
  function handleClick() {
    onToggleDarkMode()
  }

  return (
    <Nav>
      <h1 className="branding">
        <Link to="/">
          <Logo>{"//"}</Logo>
          Project Showcase
        </Link>
      </h1>
      <HorizontalButtonContainer>
        <NavButton exact to="/projects">
          All Projects
        </NavButton>
        <NavButton exact to="/projects/new">
          Add Project
        </NavButton>
        <Button onClick={handleClick}>{isDarkMode ? 'Dark' : 'Light'} Mode</Button>
      </HorizontalButtonContainer>
    </Nav>
  );
}

export default Header;

const NavButton = styled(NavLink)`
  ${buttonBase}
`

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-content: center;

  & h1 a {
    border-bottom: none;
  }
  & h1 a:hover {
    border-bottom: none;
    background-color: transparent;
  }
`

const Logo = styled.span`
  color: var(--turquoise);
  font-size: 1.25em;
  font-family: Helvetica;
  margin-right: 0.5rem;
`
