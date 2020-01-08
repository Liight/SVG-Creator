import React, { Component } from "react";

import SetOfShapesDisplay from "../../components/SetOfShapesDisplay/SetOfShapesDisplay";

import "./SetOfShapesDisplayContainer.css";

class SetOfShapesDisplayContainer extends Component {
  render() {
    return (
      <div className="setOfShapesDisplayContainer">
        <div className="setOfShapesDisplay-box">
      <div className="instructions-box">
          <b className="instructions">Click a saved image to download.</b>
        </div>
        <div className="setOfShapesDisplayContainer-wrapper">
          <SetOfShapesDisplay />
        </div>
        </div>
      </div>
    );
  }
}

export default SetOfShapesDisplayContainer;
