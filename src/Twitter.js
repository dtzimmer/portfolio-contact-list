import React, {Component, Fragment} from 'react'
import './App.css';
import Header from "./Header";
import Footer from "./Footer";



class Twitter extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <body>
                <h2>Fetching Twitter</h2>
                <div className="twitterfeed">
                    <a className="twitter-timeline" href="https://twitter.com/dtzimmer?ref_src=twsrc%5Etfw">Tweets
                        by dtzimmer</a>
                </div>
                <Footer/>
                </body>
            </Fragment>
        )
    }
}

export default Twitter