import React, { Component } from 'react';
import './api.css';

class Api extends Component {
    constructor(props) {
    super(props);
    this.state = {
      posts: '',
    }
  }

  componentDidMount() {
    let base = this;
    let api = 'https://www.reddit.com/r/webdev/top.json?limit=10&t=week';
    fetch(api)
    .then((response) => {
      return response.json() //get me the json from reddit
    }).then((json) => {
      let reddit = json.data; //json Data
      let child = reddit.children; //target specifically the children within the json data...

      let childArray = [];
      for(var i = 0; i < child.length; i++){
        childArray.push(child[i].data);
      }
       // these are the children or the individual posts on Reddit

      let permaUrl = [];
      for(var i = 0; i < childArray.length; i++){
        permaUrl.push("https://www.reddit.com" + childArray[i].permalink.toString());
      }

      let webdevPosts = [];
      let listNumbers = [1,2,3,4,5,6,7,8,9,10]
      for (var i = 0, j = 1; i < childArray.length, j < childArray.length + 1; i++, j++){
        webdevPosts.push(
          <ul key={i}>
            <a href= {permaUrl[i]}> <i className="fa ">  {[j]}.</i> {childArray[i].title} <span className="fa fa-thumbs-o-up">
              {childArray[i].ups} upvotes
            </span> </a>
          </ul>
        )
      }



      base.setState({
        posts: webdevPosts
      });
    }).catch((ex) => {
      console.log('An error occured while parsing!', ex) //errors
    });
  }

  render() {
    let posts = this.state.posts

    return (
      <div className="post-container">
        <a href="https://www.reddit.com/r/webdev/">

          <h1>Top 10 current Posts on r/webdev</h1>
        </a>

          <ul>{posts}</ul>

      </div>
    );
  }
}



export default Api;
