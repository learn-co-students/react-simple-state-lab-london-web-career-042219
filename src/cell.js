//We want each Cell to keep track of a single state value: color, (which will be a 3 digit hex value i.e. '#FFF').
import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props); // Remember to call super() on the first line of the constructor
    //(this is required in React components if we are to use this in the constructor)
    // ...define initial state with a key of 'color' set to the 'value' prop
    this.state = {
      color: this.props.value
    };
  }

  //Cell should render a single <div> with a className of cell
  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={event => this.setState({ color: `#333` })}
      />
    );
  }
}
