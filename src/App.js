import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
// import ShapesDisplay from "./components/ShapesDisplay/ShapesDisplay";
import ShapesDisplayContainer from "./containers/ShapesDisplayContainer/ShapesDisplayContainer";
import SetOfShapesDisplayContainer from "./containers/SetOfShapesDisplayContainer/SetOfShapesDisplayContainer";
import CanvasContainer from "./containers/CanvasContainer/CanvasContainer";

class App extends Component {
  componentDidMount() {
    document.title = "SVG Creator";
  }
  render() {
    return (
      <div className="App">
        <div className="link-container">
          {" "}
          <a
            href="https://www.w3.org/TR/SVG2/intro.html#AboutSVG"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              alt="Salable Vector graphics"
              src={require("../src/assets/images/svgLogo.PNG")}
              width="100%"
              height="auto"
            />
          </a>
        </div>

        <div className="welcome">
          <p className="welcome-text">Create and download SVGs</p>
        </div>

        <div className="app-components">
          <CanvasContainer className={CanvasContainer} />
          <ShapesDisplayContainer className={ShapesDisplayContainer} />
          <SetOfShapesDisplayContainer
            className={SetOfShapesDisplayContainer}
          />
        </div>
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
