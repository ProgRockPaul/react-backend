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
        <Link className="tablinks" to="/topics/drummachine"><button>Drum Machine</button></Link>
        <Link className="tablinks" to="/topics/webdev100"><button>r/WebDev Top 100 Posts</button></Link>
      </ul>

      <hr/>

      <Route className="tabcontent" path="/topics/drummachine" component={DrumMachine}/>
      <Route className="tabcontent" path="/topics/webdev100" component={Api}/>
        <div>
          <h2>
            Just imagine what I could personally build for you
          </h2>
        </div>
    </div>
  </Router>
)

export default Topics;
