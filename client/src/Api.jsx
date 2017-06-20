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
    let api = 'https://www.reddit.com/r/webdev/top.json?limit=100&t=week';
    fetch(api)
    .then((response) => {
      return response.json() //get me the json from reddit
      }).then((json) => {
        let reddit = json.data; //json Data
        let child = reddit.children;
        //target specifically the children within the json data...
        let childArray = child.map(function(x){
          return x.data
        })
       // these are the children or the individual posts on Reddit
      console.log(child)

      let permaUrl = childArray.map(function(child){
        return "https://www.reddit.com" + child.permalink.toString()
      })
      //urls with permalink added
      let webdevPosts = [];
      for (let i = 0; i < childArray.length; i++){
        webdevPosts.push(
          <ul key={i} className="posts">
            <div>
              <img src={childArray[i].thumbnail} onError={(event)=>event.target.setAttribute("src",'https://upload.wikimedia.org/wikipedia/commons/4/43/Reddit.svg')}/>
            </div>
            <i>{[i+1]}. </i>
            <a href= {permaUrl[i]}>
              <span>{childArray[i].title}</span>
              <span className="fa fa-thumbs-o-up">{childArray[i].ups} upvotes</span>
            </a>
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
      <div>
          <h1>
            Top 100 Posts THIS WEEK on r/webdev!!
          </h1>
          <ul className="post-container">{posts}</ul>
      </div>
    );
  }
}
export default Api;
