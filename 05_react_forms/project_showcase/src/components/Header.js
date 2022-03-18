
function Header({isDark, onToggleDarkMode}) {

  return (
    <header>
      <h1>
      <span className="logo">{"//"}</span>
          {`Project Showcase`}
      </h1>
      <button onClick={onToggleDarkMode}>
        {isDark? 'Dark' : 'Light'} Mode
      </button>

    </header>
  );
}
export default Header;









