import React, { Component } from 'react';
import './api.css';

class Api extends Component {
    constructor(props) {
    super(props);
    this.state = {
      post1: '',
      post2: '',
      post3: '',
      post4: '',
      post5: '',
      post6: '',
      post7: '',
      post8: '',
      post9: '',
      post10: '',
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
      console.log(child[9]);
      let childArray = [];
      for(var i = 0; i < child.length; i++){
        childArray.push(child[i].data);
      }
       // these are the children or the individual posts on Reddit
      var url1 = "https://www.reddit.com" + childArray[0].permalink.toString();
      var url2 = "https://www.reddit.com" + childArray[1].permalink.toString();
      var url3 = "https://www.reddit.com" + childArray[2].permalink.toString();
      var url4 = "https://www.reddit.com" + childArray[3].permalink.toString();
      var url5 = "https://www.reddit.com" + childArray[4].permalink.toString();
      var url6 = "https://www.reddit.com" + childArray[5].permalink.toString();
      var url7 = "https://www.reddit.com" + childArray[6].permalink.toString();
      var url8 = "https://www.reddit.com" + childArray[7].permalink.toString();
      var url9 = "https://www.reddit.com" + childArray[8].permalink.toString();
      var url10 = "https://www.reddit.com" + childArray[9].permalink.toString();


      var r1 = <i className="fa fa-thumbs-o-up">1: <a href= {url1} >{childArray[0].title}</a> {childArray[0].ups} upvotes </i>;
        var r2 = <i className="fa fa-thumbs-o-up">2: <a href= {url2}>{childArray[1].title}</a> {childArray[1].ups} upvotes</i>;
          var r3 = <i className="fa fa-thumbs-o-up">3: <a href= {url3}>{childArray[2].title}</a>  {childArray[2].ups} upvotes</i>;
            var r4 = <i className="fa fa-thumbs-o-up">4: <a href= {url4}>{childArray[3].title}</a> {childArray[3].ups} upvotes</i>;
              var r5 = <i className="fa fa-thumbs-o-up">5: <a href= {url5}>{childArray[4].title}</a> {childArray[4].ups} upvotes</i>;
                var r6 = <i className="fa fa-thumbs-o-up">6: <a href= {url6}>{childArray[5].title}</a> {childArray[5].ups} upvotes</i>;
                  var r7 = <i className="fa fa-thumbs-o-up">7: <a href= {url7}>{childArray[6].title}</a> {childArray[6].ups} upvotes</i>;
                    var r8 = <i className="fa fa-thumbs-o-up">8: <a href= {url8}>{childArray[7].title}</a> {childArray[7].ups} upvotes</i>;
                      var r9 = <i className="fa fa-thumbs-o-up">9: <a href= {url9}>{childArray[8].title}</a> {childArray[8].ups} upvotes</i>;
                        var r10 = <i className="fa fa-thumbs-o-up">10: <a href= {url10}>{childArray[9].title}</a> {childArray[9].ups} upvotes</i>;

      base.setState({
        post1: r1,
        post2: r2,
        post3: r3,
        post4: r4,
        post5: r5,
        post6: r6,
        post7: r7,
        post8: r8,
        post9: r9,
        post10: r10,
      });
    }).catch((ex) => {
      console.log('An error occured while parsing!', ex) //errors
    });
  }

  render() {
    let post1 = this.state.post1;
    let post2 = this.state.post2;
    let post3 = this.state.post3;
    let post4 = this.state.post4;
    let post5 = this.state.post5;
    let post6 = this.state.post6;
    let post7 = this.state.post7;
    let post8 = this.state.post8;
    let post9 = this.state.post9;
    let post10 = this.state.post10;

    return (
      <div>
        <h1>Top 10 current Posts on <a href="https://www.reddit.com/r/webdev/">r/webdev</a>
        </h1>

          <ul>{post1}</ul>
          <ul>{post2}</ul>
          <ul>{post3}</ul>
          <ul>{post4}</ul>
          <ul>{post5}</ul>
          <ul>{post6}</ul>
          <ul>{post7}</ul>
          <ul>{post8}</ul>
          <ul>{post9}</ul>
          <ul>{post10}</ul>
      </div>
    );
  }
}



export default Api;
