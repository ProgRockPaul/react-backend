import React, { Component } from 'react';
import './music.css'
import {
  Link
} from 'react-router-dom';


class Music extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-image">
          <div className="hero-text">
            <h1>I am Paul Walsh</h1>
            <p>And I'm a Musician Too</p>
            <div className="music-container">
                <p>Soundcloud:
                  <iframe name="audio" width="299" height="299" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1198477&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                </p>
                <p>Youtube:
                  <iframe name="video" width="299" height="299" src="https://www.youtube.com/embed/videoseries?list=PLZqP2eTUCIkEDLf8j085ZbbvOGZ-uqSkl" frameborder="0" allowfullscreen></iframe>
                </p>
            </div>

            <button>
              <a href="#contact">
                <Link to ="/contact" >Contact Me</Link> {' '}
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
