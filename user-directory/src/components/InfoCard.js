import React, { Component } from 'react';
import data from '../info/data';
import './InfoCard.css';

export default class InfoCard extends Component {
    constructor(){
        super();

        this.state = {
            id: 1
        }
    }


    render() {
        let current = data[this.state.id - 1];
        return <div className="main-container">
            <h2>{this.state.id}/{data.length}</h2>
            <h1 className="name">{current.name.first} {current.name.last}</h1>
            <h3 className="subject">From: </h3>
            <h3>{current.city}, {current.country}</h3>
            <h3 className="subject">Job Title: </h3>
            <h3>{current.title}</h3>
            <h3 className="subject">Employer: </h3>
            <h3>{current.employer}</h3>
            <h3 className="subject">Favorite Movies:</h3>
            <ol>
                <li>{current.favoriteMovies[0]}</li>
                <li>{current.favoriteMovies[1]}</li>
                <li>{current.favoriteMovies[2]}</li>
            </ol>
        </div>
    }
}