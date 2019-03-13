import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Canvas from "../../components/Canvas/Canvas";
import ColorOptionsPanel from "../../components/ColorOptionsPanel/ColorOptionsPanel";

import "./CanvasContainer.css";

class CanvasContainer extends Component {
  render() {
    let buttonSet = (
      <div className="canvas-container-button-container">
        <button onClick={this.props.onCanvasClear}>Clear Canvas</button>
        <button
          disabled={!this.props.canSaveShape}
          onClick={this.props.onSetShapeToBeSaved}
        >
          Save Shape To Set
        </button>
      </div>
    );

    return (
      <div className="canvasContainer">
        <p>
          <b className="instructions">#1 Draw on the canvas</b>
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
    onSetShapeToBeSaved: () => dispatch(actions.setShapeToBeSaved())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasContainer);
