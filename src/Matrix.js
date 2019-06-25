import React, { Component } from 'react';
import Cell from './Cell.js'
import {defaultpattern1} from './defaultdata.js'


export default class Matrix extends Component {
  
  genRow = (vals, rowindex) => (
    vals.map((val, cellkey) => <Cell value={val} key={cellkey}/>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map((rowVals,rowindex) => <div key={rowindex} className="row">{this.genRow(rowVals, rowindex)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

// Set default props
Matrix.defaultProps = {
  values: defaultpattern1
};