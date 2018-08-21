import React from 'react';
import './App.css';
import Home from './Home'
import ListofContacts from './ListofContacts'
import TestFetch from './TestFetch'
import TestFetch2 from './TestFetch2'
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
                <Route path="/testfetch" component={TestFetch}/>
                <Route path="/testfetch2" component={TestFetch2}/>
                <Route path="/twitter" component ={Twitter}/>
            </Switch>
        </Router>

       )
export default Routing;