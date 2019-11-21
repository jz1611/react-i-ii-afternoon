import React, { Component } from 'react';
import './Toolbar.css'

export default class Toolbar extends Component {
    render(){
        return <div className="toolbar">
            <button className="move">&lt; Previous</button>
            <button className="change">Edit</button>
            <button className="change">Delete</button>
            <button className="change">New</button>
            <button className="move">Next &gt;</button>
        </div>
    }
}