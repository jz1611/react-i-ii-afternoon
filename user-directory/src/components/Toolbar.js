import React, { Component } from 'react';
import './Toolbar.css'

export default class Toolbar extends Component {
    constructor(props){
        super(props);


        this.handleMoveClick = this.handleMoveClick.bind(this);
    }

    handleMoveClick(){
        return this.props.id + 1;
    }

    render(){
        return <div className="toolbar">
            <button className="move" onClick={this.handleMoveClick}>&lt; Previous</button>
            <button className="change">Edit</button>
            <button className="change">Delete</button>
            <button className="change">New</button>
            <button className="move" onClick={this.handleMoveClick}>Next &gt;</button>
        </div>
    }
}