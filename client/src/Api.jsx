import React, { Component } from 'react';

class Api extends Component {
    constructor(props) {
    super(props);
    this.state = {
      perma: '',
      title: '',
      ups: '',
    }
  }

  componentDidMount() {
    // save a reference to `this` because the value of `this` will change
    // inspermae the different callback functions.
    var base = this;

    let api = 'https://www.reddit.com/r/webdev/top.json?limit=10&t=week';
    fetch(api)
      .then((response) => {
        return response.json()
      }).then((json) => {
          let reddit = json.data;
          let child = reddit.children;
          let childArray = [child[0],child[2],child[3],child[4],child[5],child[6],child[7],child[8],child[9]];
          base.setState({
            perma: childArray[0].data.permalink,
            title: childArray[0].data.title,
            ups: childArray[0].data.ups
          });
          console.log(childArray)
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      });
  }

  render() {
    let perma = this.state.perma;
    let title = this.state.title;
    let ups = this.state.ups;
    let url = "https://www.reddit.com" + perma.toString()
    return (
      <div>
        <h1>Top 10 current Posts on <a href="https://www.reddit.com/r/webdev/">r/webdev</a>
        </h1>
        <p>1: <a href={url}>{title}</a> + {ups} upvotes</p>
          <p>2: <a href={url}>{title}</a> + {ups} upvotes</p>

      </div>
    );
  }
}


export default Api;
