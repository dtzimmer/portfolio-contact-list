import React, { Component, Fragment } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <Fragment>
                <h1>Fetch.netlify.com</h1>
                <nav>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to ="/"><a className="nav-item nav-link active">Home <span
                                    className="sr-only">(current)</span></a></Link>
                                <Link to ="ListofContacts"><a className="nav-item nav-link">Contacts</a></Link>
                                <Link to ="TestFetch"><a className="nav-item nav-link">News</a></Link>
                                <Link to ="TestFetch2"><a className="nav-item nav-link">Friends</a></Link>
                                <Link to ="Twitter"><a className="nav-item nav-link">Twitter</a></Link>
                            </div>
                        </div>
                    </nav>
                </nav>

            </Fragment>
        );
    }
}

export default Header;