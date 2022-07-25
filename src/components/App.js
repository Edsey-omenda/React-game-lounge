import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
    <Navbar />
    <Home />
    </div>
    </Router>
   
  );
}

export default App;
