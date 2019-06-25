import React, { Component } from 'react';

export default class Cell extends Component {

// Use the contructor to set the initial state
    constructor(props) {
        super(props);
        this.state = { originalcolor:this.props.value,
            color:this.props.value};
    }

// Write a function to change the colour
    changeColor = () => {
        this.setState( { color: this.state.color===this.state.originalcolor ? '#333' : this.state.originalcolor } )
    }

// Now render the cell
    render() {
        return (<div key={this.props.cellkey} onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}} ></div>); // replace me and render a cell component instead!
    }

}