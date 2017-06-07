import React, { Component } from 'react';
import "./Home.css";
class Home extends Component {
  render(){
    return(
      <div>
        <div className="parallax1">
          <div className="flex-container">
            <h1>The Real Paul Walsh Homepage</h1>

          </div>
        </div>
        <div>
          <h2>Moving the world with code and sound</h2>
        </div>
        <div className="parallax2"></div>
      </div>

    )
  }
}

export default Home;
