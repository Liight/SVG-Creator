import React, { Component, cloneElement } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

import "./ShapesDisplay.css";

class shapesDisplay extends Component {

  componentDidUpdate(){
    if(this.props.shapesDisplayShouldBeCleared){
      this.clearShapeDisplay()
    }
    if(this.props.saveThisShape){
      if(this.props.addedShapes !== null){
        console.log('attempting to save shape')
        this.props.onSaveShapeToSetOfShapes(this.props.addedShapes[this.props.addedShapes.length-1]);
      } 
      
    }
    if(document.getElementById('svgField').childNodes.length > 0){
      if(!this.props.canSaveShape){
        this.props.onEnableSaveShape();
      }
    }
  }

  clearShapeDisplay(){
    let svgField = document.getElementById('svgField');
    let svgFieldChildren = svgField.childNodes;
    if(svgFieldChildren.length > 0){
      console.log('childnodes', svgFieldChildren)
      svgField.removeChild(svgFieldChildren);
    }
    console.log("about to dispatch onReadyShapesDisplay")
    this.props.onReadyShapesDisplay();
  };

  render() {
    let shapes = [];
    if (this.props.addedShapes !== null) {
      shapes = this.props.addedShapes;
      // console.log('shapes attempted update')
    }
    console.log("shapesDisplay render - shapes", shapes);

    return (
      <div>
        <svg
          id="svgField"
          className="shapeContainer"
          height={"500"}
          width={"500"}
          viewBox="0 0 500 500"
        >
          {shapes.map((shp, i) => {
            return cloneElement(shp, { props: { key: Math.random().toString() }  });
          })}
        </svg>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedShapes: state.shapes.addedShapes,
    shapesDisplayShouldBeCleared: state.shapes.shapesDisplayShouldBeCleared,
    saveThisShape: state.shapes.saveThisShape,
    canSaveShape: state.shapes.canSaveShape
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearShapesDisplay: () => dispatch(actions.clearShapesDisplay()),
    onReadyShapesDisplay: () => dispatch(actions.readyShapesDisplayForShapes()),
    onSaveShapeToSetOfShapes: (shape) => dispatch(actions.saveShapeToSetOfShapes(shape)),
    onEnableSaveShape: () => dispatch(actions.enableSaveShape())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(shapesDisplay);
