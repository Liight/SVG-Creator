import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Canvas from "../../components/Canvas/Canvas";

import "./CanvasContainer.css";

class CanvasContainer extends Component {
  render() {
    return (
      <div className="canvasContainer">
      <div>
        <button onClick={this.props.onCanvasClear}>Clear Canvas</button>
      </div>
        
        <Canvas />
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
