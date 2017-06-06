import React, { Component } from 'react';

class Contact extends Component {
  render(){
    return(
        <div className='flex-container'>
          <form action="/action_page.php">
            Email:<br/>
            <input type="text" name="email" /><br/>
            Message:<br/>
            <input type="text" name="message" size="100" /><br/><br/>
            <input type="submit" value="Send Me A Message" />
          </form>
        </div>
    )
  }
}

export default Contact;
