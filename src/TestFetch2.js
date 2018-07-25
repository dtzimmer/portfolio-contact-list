import React, {Component, Fragment} from 'react'
import './App.css';


class TestFetch2 extends Component {
    constructor() {
        super();
        this.state = {
            results: []
        };
    }

    componentWillMount() {

        fetch('https://randomuser.me/api/?results=50')
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({results: data.results})
            })
    }


    render() {

        const {results} = this.state;

        return (
            <Fragment>
                <body className="backgroundcolor">
                <h1>Friends</h1>

                    <section >
                            {results.map((info) => {
                                return (
                                    <div className="profiles" key={info.id.value}>
                                        <div>
                                            <img className="profilepic" src={info.picture.large} alt=""/>
                                        </div>
                                        <div>
                                            <h3>{info.name.first.charAt(0).toUpperCase() + info.name.first.slice(1)} {info.name.last.charAt(0).toUpperCase() + info.name.last.slice(1)}</h3>
                                            <p>Phone: {info.phone}</p>
                                            <p>City, State: {info.location.city.charAt(0).toUpperCase() + info.name.first.slice(1)}, {info.location.state.charAt(0).toUpperCase() + info.name.first.slice(1)}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </section>
                </body>
            </Fragment>
        )
    }
}

export default TestFetch2