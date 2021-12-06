import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Rover from './Rover';
import Drone from './Drone';
import Response from './Response';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rover" element={<Rover />} />
          <Route exact path="/drone" element={<Drone />} />
          <Route exact path="/response" element={<Response />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
