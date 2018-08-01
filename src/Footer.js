import React, { Component, Fragment } from 'react';
import './App.css';


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="backgroundlightgrey">
                    <p>A Dan Zimmerman Site </p>
                    <div className="centerlink">
                    <a  href="https://github.com/dtzimmer">Visit my GitHub</a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;