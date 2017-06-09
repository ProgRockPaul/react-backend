import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
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
            <a href="#home">
              <Link to ="/" >Home Page</Link> {' '}
            </a>
            <a href="#music">
              <Link to ="/music">My Music</Link> {' '}
            </a>
            <a href="#contact">
              <Link to ="/contact" >Contact Me</Link> {' '}
            </a>
            <a href="#topics">
              <Link to ="/topics" >React Portfolio</Link> {' '}
            </a>
            <a href="javascript:void(0);" className="icon" onClick={myFunction}><button className="fa fa-beer"></button></a>
          </div>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
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
