import React, {Component, Fragment} from 'react'
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Logo from "./Fetch.jpg"

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <section>
                    <img className="logo" src={Logo} alt="fetch logo"/>
                </section>
                <Footer/>
            </Fragment>
        )
    }
}

export default Home