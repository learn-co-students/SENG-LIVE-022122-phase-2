function App() {
  return (
    <div className="App">
      <Header text="Home" subtitle="test" />
      <Header text="About" subtitle="testing" />
      This is our app!
    </div>
  );
}

// header UI
// prop: the data that the component is going to receive and use within itself

const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.text}</h1>
      <h2>{props.subtitle}</h2>
    </>
  );
};

export default App;
