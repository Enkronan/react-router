import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from './shop'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <About/>
      <Shop/>
    </div>
  );
}

export default App;
