import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import ShapesDisplayContainer from "./containers/ShapesDisplayContainer/ShapesDisplayContainer";
import SetOfShapesDisplayContainer from "./containers/SetOfShapesDisplayContainer/SetOfShapesDisplayContainer";
import CanvasContainer from "./containers/CanvasContainer/CanvasContainer";
import Footer from './containers/footer/footer.js';
import Header from './containers/header/header.js'

class App extends Component {
  componentDidMount() {
    document.title = "SVG Creator";
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-components">
          <CanvasContainer className={CanvasContainer} />
          <ShapesDisplayContainer className={ShapesDisplayContainer} />
          <SetOfShapesDisplayContainer
            className={SetOfShapesDisplayContainer}
          />
        </div>
        <Footer />
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
