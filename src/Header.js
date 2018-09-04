import React, { Component, Fragment } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to ="/" className="nav-item nav-link active">Home <span
                                    className="sr-only">(current)</span></Link>
                                <Link to ="ListofContacts" className="nav-item nav-link">Contacts</Link>
                                <Link to ="TestFetch" className="nav-item nav-link">News</Link>
                                <Link to ="TestFetch2" className="nav-item nav-link">Friends</Link>
                                <Link to ="Twitter" className="nav-item nav-link">Twitter</Link>
                            </div>
                        </div>
                    </nav>
                </nav>

            </Fragment>
        );
    }
}

export default Header;