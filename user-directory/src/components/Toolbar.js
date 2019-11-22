import React, { Component } from 'react';
import './Toolbar.css'

export default class Toolbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="toolbar">
            <button className="move" onClick={() => this.props.moveClick('prev')}>&lt; Previous</button>
            <button className="change">Edit</button>
            <button className="change">Delete</button>
            <button className="change">New</button>
            <button className="move" onClick={() => this.props.moveClick('next')}>Next &gt;</button>
        </div>
    }
}