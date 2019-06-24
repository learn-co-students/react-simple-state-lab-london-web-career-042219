import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: false,
      color: this.props.value
    };
  }

  toggleColor = () => {
    const min = 1;
    const max = 9.99;
    const number = Math.round((Math.random() * (max - min) + min) * 100);
    this.setState({
      color: `#${number}`
    });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="cell"
        onClick={this.toggleColor}
      />
    );
  }
}
