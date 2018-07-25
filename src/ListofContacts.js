import React, {Component, Fragment} from 'react'
import './App.css';


class ListOfContacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        };
    }

    componentWillMount() {

        fetch('http://localhost:4000')
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({contacts: data})
            })
    }


    render() {
        return (
            <Fragment>
                <h1>Daniel Zimmerman</h1>
                <h2>List of Contacts</h2>

                {this.state.contacts.map(contact =>
                    <div className="border" key={contact._id}>
                        <h3> First Name: {contact.firstName}</h3>
                        <h4> Last Name: {contact.lastName}</h4>
                        <h4> Phone: {contact.phone}</h4>
                        <h4> Email: {contact.email}</h4>
                    </div>
                )}

            </Fragment>
        )
    }
}

export default ListOfContacts