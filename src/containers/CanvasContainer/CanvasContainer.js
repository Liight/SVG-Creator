import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Canvas from "../../components/Canvas/Canvas";
import ColorOptionsPanel from "../../components/ColorOptionsPanel/ColorOptionsPanel";

import "./CanvasContainer.css";

class CanvasContainer extends Component {
  render() {
    return (
      <div className="canvasContainer">
        <p>
          <b className="instructions">#1 Draw on the canvas</b>
        </p>
        <div>
          <button onClick={this.props.onCanvasClear}>Clear Canvas</button>
        </div>

        <Canvas />
        <ColorOptionsPanel />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    canvasIsClear: state.canvas.canvasIsClear
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCanvasClear: () => dispatch(actions.clearCanvas())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasContainer);
