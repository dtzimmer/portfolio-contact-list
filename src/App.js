import React, { Component, Fragment } from 'react';
import './App.css';
import List from './ListofContacts'

class App extends Component {
  render() {
    return (
      <Fragment>
          <List/>
      </Fragment>
    );
  }
}

export default App;
