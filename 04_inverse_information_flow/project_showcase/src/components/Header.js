import React, {useState} from 'react';

function Header() {
  //[stateVar, setterFun]
const [isDark, setIsDark] = useState(true)

  const handleClick = () => {
    setIsDark(isDark => !isDark)
  }
  return (
    <header>
      <h1>
      <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>
        {isDark? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}
export default Header;









