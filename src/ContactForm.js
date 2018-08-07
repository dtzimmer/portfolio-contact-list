import React, {Component, Fragment} from 'react'
import './App.css';
// import Header from "./Header";
// import Footer from "./Footer";

class ContactForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify ({...this.state})

        fetch('http://localhost:4000', {
            method:'post',
            body: data,
            headers: {
                "Content-type" : "application/json"
            }
        })

    }


    render() {
        return (
            <Fragment>
                <body>
                {/*<Header/>*/}

                <section>
                    <form onSubmit={this.handleSubmit}>
                        <br/>
                        <label form="firstname">First Name</label>
                        <input type="text" id="firstname" name="firstname"
                               placeholder="First name" onChange={e => this.setState({ firstName: e.target.value})}/>
                        <br/>
                        <label form="lastname">Last Name</label>
                        <input type="text" id="lastname" name="lastname"
                               placeholder="Last name" onChange={e => this.setState({ lastName: e.target.value})}/>
                        <br/>
                        <label form="email">Email:</label>
                        <input type="email" id="email" name="email"
                               placeholder="Enter Email" onChange={e => this.setState({ email: e.target.value})}/>
                        <br/>
                        <label form="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone"
                               placeholder="Enter Phone" onChange={e => this.setState({ phone: e.target.value})}/>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </section>
                {/*<Footer/>*/}
                </body>
            </Fragment>
        )
    }
}

export default ContactForm