import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";

import "./Canvas.css";
import * as actions from "../../store/actions/index";

export class Canvas extends Component {
  state = {
    mouseIsDown: false,
    startedDrawing: false,
    record: false,
    recordedShapePath: [],
  };

  componentDidMount() {
    this.elem = ReactDOM.findDOMNode(this);
    this.updateCanvas();
  }

  componentDidUpdate(){
    if(this.props.canvasShouldBeClear){
      this.clearCanvas();
      this.props.onReadyCanvasForDrawing();
    }
  }

  updateCanvas() {
    this.ctx = this.refs.canvas.getContext("2d");
  }

  clearCanvas() {
    const canvas = document.getElementById('can');
    const context = canvas.getContext("2d");
    this.setState({ 
      recordedShapePath: [], 
      mouseIsDown: false,
      startedDrawing: false,
      record: false,
    });
    context.clearRect(0, 0, 500, 500);
    this.ctx.closePath();
  }

  getMouseCoordinates(event) {
    const canvas_x = event.pageX - this.elem.offsetLeft;
    const canvas_y = event.pageY - this.elem.offsetTop;
    return {
      x: canvas_x,
      y: canvas_y
    };
  }

  onMouseDown(event) {
    this.setState({ mouseIsDown: true, startedDrawing: true, record: true });
    let mouseCoords = this.getMouseCoordinates(event);
    this.ctx.moveTo(mouseCoords.x, mouseCoords.y);
    this.ctx.beginPath();
  }

  onMouseMove(event) {
    let mouseCoords = this.getMouseCoordinates(event);
    if (this.state.mouseIsDown) {
      if (this.state.startedDrawing) {
        this.ctx.lineTo(mouseCoords.x, mouseCoords.y);
        this.ctx.stroke();
      } else {
        this.ctx.moveTo(mouseCoords.x, mouseCoords.y);
      }
      if (this.state.record) {
        let currentCoords = this.recordPath(mouseCoords);
        this.setState({
          recordedShapePath: [...this.state.recordedShapePath, currentCoords]
        });
      }
    }
  }

  recordPath(mouseCoords) {
    return "" + mouseCoords.x + "," + mouseCoords.y + " ";
  }

  onMouseUp(event) {
    if (this.state.record) {
      this.setState({ recordedShapePath: [...this.state.recordedShapePath, "M "] });
      this.mapPointsToValidSVGPolylineString([...this.state.recordedShapePath]);
    }
    if (this.state.mouseIsDown) {
      this.setState({
        mouseIsDown: false,
        startedDrawing: false,
        record: false
      });
    }
  }

  mapPointsToValidSVGPolylineString(pointsArray) {
    let pointsString = pointsArray.join("");
    pointsString = pointsString.toString().trim();
    console.log(pointsString);
    this.createShapeAndAddToState(pointsString)
  }

  createShapeAndAddToState(pointsString) {
    const makeKey = Math.random().toString()
    const shape = {
      key: makeKey,
      points: pointsString,
      fill: "none",
      stroke: this.props.currentColor,
      strokeWidth: 2
    };
    this.props.onShapeAdded(shape);
  }

  render() {
    return (
        <canvas
          id="can"
          ref="canvas"
          viewBox="0 0 100 100"
          width="500"
          height="500"
          className="canvas"
          onMouseDown={event => this.onMouseDown(event)}
          onMouseMove={event => this.onMouseMove(event)}
          onMouseUp={event => this.onMouseUp(event)}
        />
    );
  }
}

const mapStateToProps = state => {
  return {
    canvasShouldBeClear: state.canvas.canvasShouldBeClear,
    currentColor: state.colors.currentColor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShapeAdded: shape => dispatch(actions.convertShapeToSVGAndAddToCollection(shape)),
    onCanvasClear: canvas => dispatch(actions.clearCanvas(canvas)),
    onReadyCanvasForDrawing: () => dispatch(actions.readyCanvasForDrawing())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
