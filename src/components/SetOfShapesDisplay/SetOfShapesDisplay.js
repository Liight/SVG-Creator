import React, { Component, cloneElement } from "react";
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

    // shapeSetToRender = shapeSetToRender.map((shp, i) => {
    //   return cloneElement(shp, { key: Math.random().toString() });
    // });

    return (
      <div id="setOfShapesDisplayDiv">
          {shapeSetToRender.map(shapeSet => {

              // console.log('shape saved to set and on display', shapeSet)
              return (
                  <svg 
                    height={100} 
                    width={100} 
                    viewBox="0 0 500 500" 
                    key={Math.random()}
                    shapekey={shapeSet[shapeSet.length-1].key} 
                    // onClick={(event) => this.removeShapeFromSet(event)} 
                    onClick={(event) => this.prepareShapeForDownloadAndExecuteDownload(event)}>
                    {shapeSet.map((shp, i) => {
                      // console.log('individual shape ', shp)
                      return cloneElement(shp,{ key: i });
                    })}
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
