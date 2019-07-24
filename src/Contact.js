import React, { Component } from 'react';
import data from './data.json'
import './Contact.css'
import MaterialIcon from 'material-icons-react';
import {Link} from 'react-router-dom'

class Contact extends Component {
    state = {
        email: '',
        phone: '',
        fname: '',
        lname: '',
        city: '',
        state: '',
        image: ''

    }
    componentWillMount() {
        var newData = data.find(item => item.id == this.props.match.params.id);
        this.setState({
            email: newData.email,
            phone: newData.phone,
            fname: newData.name.first,
            lname: newData.name.last,
            city: newData.location.city,
            state: newData.location.state,
            image: newData.picture.large
        })
    }
    
    render() {
        return (
            <div id="wrapper">
                <div class="thumbnail">
                    <img src={this.state.image}></img>
                    <Link to="/"><MaterialIcon icon="arrow_back" /></Link>
                </div>
                <div class="userContent">
                    <div class="content">
                        <MaterialIcon icon="face" />{this.state.fname} {this.state.lname}
                    </div>
                    <div class="content">
                        <MaterialIcon icon="mail" />{this.state.email}
                    </div>
                    <div class="content">
                        <MaterialIcon icon="smartphone" />{this.state.phone}
                    </div>
                    <div class="content">
                        <MaterialIcon icon="my_location" />{this.state.city}, {this.state.state}
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact