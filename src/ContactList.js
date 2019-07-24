import React, { Component } from 'react';
import Contacts from './Contacts'
import './App.css'

class ContactList extends Component {
    render() {
        return(
            <div id="container">
            <div id="topBar">
                <h1>My Peeps</h1>
            </div>
            <div id="contactList">
                <Contacts></Contacts>
            </div>
          </div>
        )
    }
}
export default ContactList