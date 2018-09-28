require('../styles/App.css');
require('../styles/Login.css');
import React from 'react';
import { Link } from 'react-router-dom'
import ChatApp from './ChatApp';

class App extends React.Component {

  render() {
    
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>My messenger</h1>
        <a href="#" class="btn btn-info" role="button">Link Button</a>
        <button hef="#" type="button" class="btn btn-primary">Primary</button>
      </form>
    );
  }

}
App.defaultProps = {
};

export default App;
