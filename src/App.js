import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
// import ShapesDisplay from "./components/ShapesDisplay/ShapesDisplay";
import ShapesDisplayContainer from "./containers/ShapesDisplayContainer/ShapesDisplayContainer";
import SetOfShapesDisplayContainer from "./containers/SetOfShapesDisplayContainer/SetOfShapesDisplayContainer";
import CanvasContainer from "./containers/CanvasContainer/CanvasContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CanvasContainer />
        <ShapesDisplayContainer />
        <SetOfShapesDisplayContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedShapes: state.addedShapes
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
