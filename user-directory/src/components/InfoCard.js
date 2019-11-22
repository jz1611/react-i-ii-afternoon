import React, { Component } from 'react';
import './InfoCard.css';

export default class InfoCard extends Component {
    render() {
        let current = this.props.data[this.props.id - 1];
        return <div className="main-container">
            <h2>{this.props.id}/{this.props.data.length}</h2>
            <h1 className="name">{current.name.first} {current.name.last}</h1>
            <div>
                <h3 className="subject">From:&nbsp;</h3>
                <h3>{current.city}, {current.country}</h3>
            </div>
            <div>
                <h3 className="subject">Job Title:&nbsp;</h3>
                <h3>{current.title}</h3>
            </div>
            <div>
                <h3 className="subject">Employer:&nbsp;</h3>
                <h3>{current.employer}</h3>
            </div>
            <h3 className="subject" id="movies">Favorite Movies:</h3>
            <ol>
                <li>1. {current.favoriteMovies[0]}</li>
                <li>2. {current.favoriteMovies[1]}</li>
                <li>3. {current.favoriteMovies[2]}</li>
            </ol>
        </div>
    }
}