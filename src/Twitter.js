import React, {Component, Fragment} from 'react'
import './App.css';
import Header from "./Header";



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
                </body>
            </Fragment>
        )
    }
}

export default Twitter