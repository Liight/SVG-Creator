import React, { Component } from "react";
import { connect } from "react-redux";

import ShapesDisplay from "../../components/ShapesDisplay/ShapesDisplay";
import * as actions from "../../store/actions/index";

import "./ShapesDisplayContainer.css";

class ShapesDisplayContainer extends Component {
  render() {
    return (
      <div className="shapesDisplayContainer">
        <div>
          <p>
            <b className="instructions">#2 The SVG Element Renders below</b>
          </p>
          <button onClick={this.props.onClearShapesDisplay}>Clear SVG</button>
          <button
            disabled={!this.props.canSaveShape}
            onClick={this.props.onSetShapeToBeSaved}
          >
            Save Shape To Set
          </button>
        </div>

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
