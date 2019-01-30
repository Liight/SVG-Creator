import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

import SetOfShapesDisplay from "../../components/SetOfShapesDisplay/SetOfShapesDisplay";

import "./SetOfShapesDisplayContainer.css";

class SetOfShapesDisplayContainer extends Component {
  render() {
    return (
      <div className="setOfShapesDisplayContainer">
        <p>
          <b>#3 Click on a SAVED SHAPE to download it</b>
        </p>
        <button onClick={this.props.onDeleteAllShapes}>
          DELETE ALL SHAPES
        </button>
        <SetOfShapesDisplay />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteAllShapes: () => dispatch(actions.deleteAllShapes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetOfShapesDisplayContainer);
