import React, { Component, Fragment } from 'react';
import './App.css';
import List from './ListofContacts'
import TestFetch from "./TestFetch";
import TestFetch2 from "./TestFetch2";

class App extends Component {
  render() {
    return (
      <Fragment>
        <body>
          <List/>
          <TestFetch/>
          <TestFetch2/>
        </body>
      </Fragment>
    );
  }
}

export default App;
