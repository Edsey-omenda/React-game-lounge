import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
    <Navbar />
    </div>
    <Routes>
      <Route  exact path="/" element={<Home />}></Route>
      <Route  exact path="/games" eleme></Route>
    </Routes>
    </Router>
   
  );
}

export default App;
