import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Api from './Api';
import DrumMachine from './DrumMachine';
import './topics.css';

const Topics = () => (
  <Router>
    <div className="tab">
      <ul>
        <h1> Click to view a few components I've built with React! </h1>
        <button className="tablinks"><Link to="/topics/drummachine">Drum Machine</Link></button>
        <button className="tablinks"><Link to="/topics/webdev100">r/WebDev Top 100 Posts</Link></button>
      </ul>

      <hr/>

      <Route className="tabcontent" path="/topics/drummachine" component={DrumMachine}/>
      <Route className="tabcontent" path="/topics/webdev100" component={Api}/>
    </div>
  </Router>
)

export default Topics;
