import React from 'react';
import './App.css';
import Home from './Home'
import ListofContacts from './ListofContacts'
import WebLinks from './TestFetch'
import Friends from './TestFetch2'
import Twitter from './Twitter'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const Routing = () => (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/listofcontacts" component={ListofContacts}/>
                <Route path="/testfetch" component={WebLinks}/>
                <Route path="/testfetch2" component={Friends}/>
                <Route path="/twitter" component ={Twitter}/>
            </Switch>
        </Router>

       )
export default Routing;