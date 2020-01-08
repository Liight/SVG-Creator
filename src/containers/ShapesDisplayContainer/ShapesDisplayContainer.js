import React, { Component } from "react";
import { connect } from "react-redux";

import ShapesDisplay from "../../components/ShapesDisplay/ShapesDisplay";
import * as actions from "../../store/actions/index";

import "./ShapesDisplayContainer.css";

class ShapesDisplayContainer extends Component {
  render() {
    return (
      <div className="shapesDisplayContainer">
        <ShapesDisplay />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    canSaveShape: state.shapes.canSaveShape
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearShapesDisplay: () => dispatch(actions.clearShapesDisplay()),
    onSetShapeToBeSaved: () => dispatch(actions.setShapeToBeSaved())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShapesDisplayContainer);
