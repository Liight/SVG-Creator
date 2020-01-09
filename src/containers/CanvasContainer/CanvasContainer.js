import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Canvas from "../../components/Canvas/Canvas";
import ColorOptionsPanel from "../../components/ColorOptionsPanel/ColorOptionsPanel";

import "./CanvasContainer.css";

class CanvasContainer extends Component {

clearShapeHandler = () => {
  this.props.onCanvasClear()
  this.props.onClearShapesDisplay();
}

  render() {
    let buttonSet = (
      <div className="canvas-container-button-container">
        <button onClick={this.clearShapeHandler} className="canvasContainerButton canvas-container-button-clear-canvas">Clear Canvas</button>
        <button
          className="canvasContainerButton canvas-container-button-save-image"
          disabled={!this.props.canSaveShape}
          onClick={this.props.onSetShapeToBeSaved}
        >
          Save Image
        </button>
      </div>
    );

    return (
      <div className="canvasContainer">
        <p>
          <b className="canvasInstructions">Draw on the canvas below.</b>
        </p>

        <div className="studio">
          <ColorOptionsPanel />
          <Canvas />
          {buttonSet}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    canvasIsClear: state.canvas.canvasIsClear,
    canSaveShape: state.shapes.canSaveShape
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCanvasClear: () => dispatch(actions.clearCanvas()),
    onSetShapeToBeSaved: () => dispatch(actions.setShapeToBeSaved()),
    onClearShapesDisplay: () => dispatch(actions.clearShapesDisplay())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasContainer);
