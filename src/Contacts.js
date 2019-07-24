import React, { Component } from 'react';
import { Router, Link, Route } from 'react-router-dom'
import data from './data.json'

class Contacts extends Component {
    render() {
        return (
            <div>
                {data.map((person, i) => {
                   return (
                       <Link key={i} to={`/person/` + person.id}>
                           <div class="soloContact">
                           <img src={person.picture.thumbnail}></img>
                           <p>{person.name.first} {person.name.last}</p>
                           </div>
                        </Link>
                       )
                })}
            </div>
        )
    }
}
export default Contacts