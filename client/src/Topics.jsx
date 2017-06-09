import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Api from './Api';

class Topics extends React.Component{
  render(){
    return(
      <div>
        <h1>Here are some of the cool things I've made using React!</h1>
        <Api />
        
      </div>
    )
  }
}

export default Topics;
