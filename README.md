# React Simple State Lab


## Objectives

1. Practice setting initial state
2. Practice deriving initial state from props
3. Practice updating state with event listeners/handlers


## Introduction

Let's jump right into working with state. For this lab, we are going to render a
matrix, or grid, of squares. Each square will have only a background color. When
clicked, the square will change colors. 

Our component tree consists of a `Matrix`, which renders many `Cells` (squares).
Our job is to finish implementing `Matrix` so that it renders the appropriate
amount of cells, with the appropriate amount of values.

## Deliverables

#### `Matrix`

`Matrix` uses a prop, `values`, to determine the cell colors. This is a 10 x 10
array (essentially making 10 rows, with 10 values in each row). Because we are
responsible React developers, we want to make sure we have a default grid in
case no `values` prop is passed.

#### Once Finished

`npm start` and assert the following:

1. The application displays 100 cells in a 10x10 format
2. If no `values` prop is passed to `Matrix` in `src/index.js`, then all the cells are red
3. If `pattern1` is passed to `Matrix` in `src/index.js`, then the cells are alternating red-blue
4. When you click on any given cell, that cell's color changes to dark gray


## Resources

<p class='util--hide'>View <a href='https://learn.co/lessons/react-simple-state-lab'>React Simple State Lab</a> on Learn.co and start learning to code for free.</p>
