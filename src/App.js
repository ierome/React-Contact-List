import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './Contact'
import ContactList from './ContactList'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        </div>
        <Route path="/person/:id" component={Contact} />
        <Route exact path="/" component={ContactList} />
        </Router>
    )
  }
}

export default App;
