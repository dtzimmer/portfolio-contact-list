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
                <h1>Contact List</h1>

                {this.state.contacts.map(contact =>
                    <div className="border" key={contact._id}>
                        <h3> Name: {contact.firstName} {contact.lastName}</h3>
                        <p> Phone: {contact.phone}</p>
                        <p> Email: {contact.email}</p>
                    </div>
                )}

            </Fragment>
        )
    }
}

export default ListOfContacts