import React, { Component } from "react";
//import {defaultpattern1} from `./data.js`
import { defaultpattern1 } from "./defaultdata.js";
import Cell from "./cell.js";

export default class Matrix extends Component {
  genRow = vals => vals.map(val => <Cell value={val} />); //WHY VALUE! ...
  //cus you called it that in the initial state
  // REPLACE ME and render a cell component instead!
  // <div className="cell" />

  genMatrix = () =>
    this.props.values.map(rowVals => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}
Matrix.defaultProps = { values: defaultpattern1 }; // MUST be outside the class

//Make a default values prop for Matrix, which is a 10x10 array filled with the values '#F00' (red). For inspiration, take a look at src/data.js

// render() {
//   return (
//     <div className="card-back">
//       <h3 className="title">{this.props.title}</h3>
//       <span />
//       {/* your rating element should go here -- you can invoke methods within JSX, à la: this.myMethod() */

//       this.generateRatingElement(this.props.IMBDRating)}
//       <span />
//       <h5 className="genres"> {this.props.genres.join(", ")}</h5>
//     </div>
//   );
// }
