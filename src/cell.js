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
    if (this.state.switched === false) {
      this.setState({
        color: "#333",
        switched: true
      });
    } else {
      this.setState({
        color: "#100",
        switched: false
      });
    }
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
