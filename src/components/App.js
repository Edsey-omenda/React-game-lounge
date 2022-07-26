import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import GameDescription from './GameDescription';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
    <Navbar />
    </div>
    <Routes>
      <Route  exact path="/" element={<Home />}></Route>
      <Route exact path="/game/:gameId" element={<GameDescription />}></Route>
    </Routes>
    </Router>
   
  );
}

export default App;
