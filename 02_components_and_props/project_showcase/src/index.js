// importing these libraries that allow us to build React apps:
import React from 'react';
import ReactDOM from 'react-dom';

// importing a component so that we can use inside of this file
import App from './App'; 


// rendering our app to the DOM

// first arg: is the high level component rendered to the DOM, its going ot have the rest of our UI nested inside of it

// second arg: the element that we are injecting our react code into
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('anything')
);

