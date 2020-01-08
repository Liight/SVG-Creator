import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

import "./ColorOptionsPanel.css";
class colorOptionsPanel extends Component {
  render() {
    let buttonDisplayColors = [];
    for (let c in this.props.colorOptions) {
      buttonDisplayColors.push(c);
    }

    let buttonDisplay = (
      <div className={"canvasButtonGroup"}>
        {buttonDisplayColors.map((c, i) => {
          return window.innerWidth < 1200 
          ? (
            <button
              key={i}
              className="colorButtons"
              style={{ backgroundColor: c }}
              onClick={() => this.props.onChangeColor(c)}
            >
              {/* {c} */}
            </button>
            ) : <button
              key={i}
              className="colorButtons"
              style={{ backgroundColor: c }}
              onClick={() => this.props.onChangeColor(c)}
            >
              {/* {c} */}
            </button>;
        })}
      </div>
    );

    // console.log('buttonDisplay', buttonDisplayColors);

    return (
      <div className="color-palette">
        {/* <p className="instructions">
          <b>colors</b>
        </p> */}
      {buttonDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    colorOptions: state.colors.colors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeColor: chosenColor => dispatch(actions.changeColors(chosenColor))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(colorOptionsPanel);
