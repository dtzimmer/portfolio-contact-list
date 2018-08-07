import React, {Component, Fragment} from 'react'
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Contactform from "./ContactForm"

class ListOfContacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        };
    }

    handleSubmit = async (_id) => {

        await fetch('http://localhost:4000/' + _id, {
            method: 'delete'
        }).then(response => {
            response.json().then(json => {
                return json;
            })
        });
        await this.getContacts()
    };


    getContacts = async () => {

        return fetch('http://localhost:4000')
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({contacts: data})
            })

    }

    formAppear = () => {

    }

    // hiddenForm() {
    //     var x = document.getElementById("myDIV");
    //     if (x.style.display === "none") {
    //         x.style.display = "block";
    //     } else {
    //         x.style.display = "none";
    //     }
    // }


    async componentWillMount() {

        await this.getContacts()
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <h2>Fetching Contacts</h2>
                <div>
                    <h3>Coming Soon...</h3>
                <Contactform/>
                    <div>
                        {this.state.contacts.map(contact =>
                        <div className="border" key={contact._id}>
                            <h3> Name: {contact.firstName} {contact.lastName}</h3>
                            <p> Phone: {contact.phone}</p>
                            <p> Email: {contact.email}</p>
                            <button onClick={() => this.handleSubmit(contact._id)}>Delete</button>
                            {/*<button onClick={() => this.hiddenForm(contact._id)}>Click Me</button>*/}
                            {/*<div id="myDIV" key={contact._id}>*/}
                                {/*<label form="firstname">First Name</label>*/}
                                {/*<input type="text" id="firstname" name="firstname"*/}
                                       {/*placeholder="First name" onChange={e => this.setState({ firstName: e.target.value})}/>*/}
                            {/*</div>*/}
                        </div>
                    )}
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default ListOfContacts