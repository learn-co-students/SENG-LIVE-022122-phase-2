
function Header({isDark, onToggleDarkMode, handleProjectTitle}) {

  return (
    <header>
      <h1>
      <span className="logo">{"//"}</span>
          {`Project Showcase`}
      </h1>
      <button onClick={onToggleDarkMode}>
        {isDark? 'Dark' : 'Light'} Mode
      </button>
      <input onChange={handleProjectTitle}/>
    </header>
  );
}
export default Header;









