import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

import './SetOfShapesDisplay.css';

class SetOfShapesDisplay extends Component {

removeShapeFromSet(e){
  let shapeKey = e.target.getAttribute('shapekey');
  this.props.onRemoveShapeFromSetOfShapes(shapeKey)
}

prepareShapeForDownloadAndExecuteDownload(e){
  let shapeKey = e.target.getAttribute('shapekey');
  console.log('inside prepareShapeForDownloadAndExecuteDownload', shapeKey)
  this.props.onDownloadShape(shapeKey);
}

  render() {
    let shapeSetToRender = [];
    if (this.props.shapeSet.length > 0) {
      shapeSetToRender = [...this.props.shapeSet];
    }

    return (
      <div id="setOfShapesDisplayDiv">
          {shapeSetToRender.map((shp, i) => {
            console.log('shape saved to set and on display', shp)
              return (
                  <svg 
                    height={100} 
                    width={100} 
                    viewBox="0 0 500 500" 
                    key={shp.key}
                    shapekey={shp.key} 
                    // onClick={(event) => this.removeShapeFromSet(event)} 
                    onClick={(event) => this.prepareShapeForDownloadAndExecuteDownload(event)}>
                    {shp}
                  </svg>
              );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shapeSet: state.shapes.shapeSet
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveShapeFromSetOfShapes: (key) => dispatch(actions.removeShapeFromSetOfShapes(key)),
    onDownloadShape: (key) => dispatch(actions.downloadShape(key))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetOfShapesDisplay);
