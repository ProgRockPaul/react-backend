import React, { Component } from 'react';
import "./Home.css";
class Home extends Component {
  render(){
    return(
      <div>
        <div className="parallax1">
          <div className="flex-container">
            <h1>The Real Paul Walsh Homepage</h1>
            <h2>About Paul</h2>

            <p>
              Way back when I started making music as a kid I could recognize my own passion for new technology, and the potential to learn new things on the internet. I spent countless hours on forums and articles researching the ins and outs of recording and digging deep into topics related to whatever musical project had my focus at the time. I discovered very early on that everything I could want to know is available on the web if you know the right places to look.
            </p>
            <p>
              My interest in web development was spurred by someone who was also a musician, and after a few discussions we began to draw parallels between music and programming that I had never considered before... I had found another deep passion for learning programming! After a few weeks of self study I decided I really wanted to make the full commitment, so I I signed up for a semester at BitMaker.
            </p>
            <p>
              In January 2017 Web Development Cohort I spent 500+ hours immersively working on full-stack Ruby on Rails applications. My mission as a junior developer now is to find a great team continue building cool and interesting things with.
            </p>
            <p>
              I'm currently making web applications using HTML, CSS, Ruby, JavaScript ES5/ES6, jQuery, AJAX, PostgresSQL, SQLite, Ruby on Rails, React.js, Express.js, Node.js, and version control on Github.
            </p>
            <p>
              I like keeping up on web dev topics on reddit and I can usually be found at the gym or playing guitar after work.
            </p>
          </div>
        </div>
        <div className="">
        </div>
        <div className="parallax2">
            <p>relax and text text text</p>
        </div>
      </div>

    )
  }
}

export default Home;
