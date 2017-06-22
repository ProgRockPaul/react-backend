import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import './App.css';
import './nav.css';
import Music from './components/Music';
import Footer from './Footer';
import Topics from './Topics';

class App extends Component {
  render(){
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
    }
    return(
      <Router>
        <div>
          <div className='topnav' id='myTopnav'>
              <Link to ="/" >Home Page</Link> {' '}
              <Link to ="/topics" >Web Developement Portfolio</Link> {' '}
              <Link to ="/music">Music Portfolio</Link> {' '}
            <a className="icon" onClick={myFunction}><button className="fa fa-beer"></button></a>
          </div>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/music" component={Music}></Route>
            <Route path="/topics" component={Topics}></Route>


          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
