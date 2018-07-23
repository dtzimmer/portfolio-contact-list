import React, {Component, Fragment} from 'react'
import './App.css';


class ListOfContacts extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        };
    }

    componentWillMount() {

        fetch('http://localhost:4000')
            .then(results =>{
                return results.json();
            })
            .then(data => {
            let firstName = data.map((name) => {
                return (
                    <div key={name.results}>
                        <p>{name.firstName}</p>
                    </div>
                )
            })
                let lastName = data.map((name) => {
                    return (
                        <div key={name.results}>
                            <p>{name.lastName}</p>
                        </div>
                    )
                })
                let phone = data.map((phonenum) => {
                    return (
                        <div key={phonenum.results}>
                            <p>{phonenum.phone}</p>
                        </div>
                    )
                })
                let email = data.map((emailaddress) => {
                    return (
                        <div key={emailaddress.results}>
                            <p>{emailaddress.email}</p>
                        </div>
                    )
                })
            this.setState({firstName:firstName});
            this.setState({lastName:lastName});
            this.setState({phone:phone});
            this.setState({email:email});
            // console.log("state", this.state.firstName);
        })

        // fetch('http://localhost:4000')
        //     .then(results =>{
        //         return results.json();
        //     }).then(data => {
        //     let lastName = data.map((name) => {
        //         return (
        //             <div key={name.results}>
        //                 <p>{name.lastName}</p>
        //             </div>
        //         )
        //     })
        //     this.setState({lastName:lastName});
        //     // console.log("state", this.state.lastName);
        // })
        //
        // fetch('http://localhost:4000')
        //     .then(results =>{
        //         return results.json();
        //     }).then(data => {
        //     let phone = data.map((phonenum) => {
        //         return (
        //             <div key={phonenum.results}>
        //                 <p>{phonenum.phone}</p>
        //             </div>
        //         )
        //     })
        //     this.setState({phone:phone});
        //     // console.log("state", this.state.phone);
        // })
        //
        // fetch('http://localhost:4000')
        //     .then(results =>{
        //         return results.json();
        //     }).then(data => {
        //     let email = data.map((emailaddress) => {
        //         return (
        //             <div key={emailaddress.results}>
        //                 <p>{emailaddress.email}</p>
        //             </div>
        //         )
        //     })
        //     this.setState({email:email});
        //     // console.log("state", this.state.email);
        // })
    }


    render() {
        return (
            <Fragment>
                <body>
                <header>
                    <h1>Daniel Zimmerman</h1>
                    <h2>List of Contacts</h2>
                </header>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>{this.state.firstName}</td>
                            <td>{this.state.lastName}</td>
                            <td>{this.state.phone}</td>
                            <td>{this.state.email}</td>
                        </tr>
                </body>
            </Fragment>
        )
    }
}

export default ListOfContacts