import React, { Component, Fragment } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'

class ListOfContacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      name: '',
      phone: '',
      email: '',
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});

    this.getContacts()
  }

  getContacts = async () => {
    const response = await fetch('https://express-mongo-xozxpyywjj.now.sh/api/contacts', {
      mode: 'cors',
      method: 'GET'
    })
    const responseJson = await response.json()
    if (response.ok) {
      this.setState({ contacts: responseJson, isLoading: false })
    }
    this.setState({
      name: '',
      phone: '',
      email: ''
    })
    const { _id } = this.state
    if (_id) {
      this.setState({ _id: '' })
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const data = JSON.stringify({
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    })
    const { _id } = this.state
    console.log(_id, data)

    if (!_id) {
      await fetch('https://express-mongo-xozxpyywjj.now.sh/api/contacts', {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json'
        }
      })

    }
    else {
      await fetch(`https://express-mongo-xozxpyywjj.now.sh/api/contacts/${_id}`, {
        method: 'PUT',
        body: data,
        headers: {
          'Content-type': 'application/json'
        }
      })
    }
    await this.getContacts()
  }

  handleDelete = async (e, id) => {
    e.preventDefault()
    console.log(id)
    await fetch(`https://express-mongo-xozxpyywjj.now.sh/api/contacts/${id}`, {
      method: 'delete'
    }).then(data => {
      this.getContacts()
    })
  }

  populateFields = async (e, id) => {
    e.preventDefault()
    console.log(id)
    const response = await fetch(`https://express-mongo-xozxpyywjj.now.sh/api/contacts/${id}`, {
      mode: 'cors',
      method: 'GET'
    })
    const responseJson = await response.json()
    console.log(responseJson)

    this.setState({ ...responseJson })
  }


  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return <img className="loading-icon" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading Icon" />;
    }
    return (
      <Fragment>
        <Header />
        <div>
          <h2>Fetching Contacts</h2>
          <section>
            <form onSubmit={this.handleSubmit}>
              <br />
              <label form="name">Name</label>
              <input type="text" id="name" name="name"
                     placeholder="First name" value={this.state.name}
                     onChange={e => this.setState({ name: e.target.value })} />
              <br />
              <label form="email">Email:</label>
              <input type="email" id="email" name="email"
                     placeholder="Enter Email" value={this.state.email}
                     onChange={e => this.setState({ email: e.target.value })} />
              <br />
              <label form="phone">Phone:</label>
              <input type="tel" id="phone" name="phone"
                     placeholder="Enter Phone" value={this.state.phone}
                     onChange={e => this.setState({ phone: e.target.value })} />
              <br />
              <button type="submit">Submit</button>
            </form>
          </section>
          <div>
            <h2>List of Contacts</h2>
            {this.state.contacts.map(contact =>
              <div className="contact-display-area" key={contact._id}>
                <h3> Name: {contact.name}</h3>
                <p> Phone: {contact.phone}</p>
                <p> Email: {contact.email}</p>
                <button onClick={(e) => this.handleDelete(e, contact._id)}>Delete</button>
                <button onClick={(e) => this.populateFields(e, contact._id)}>Update?</button>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}
export default ListOfContacts