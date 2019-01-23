import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions/index";

import SetOfShapesDisplay from '../../components/SetOfShapesDisplay/SetOfShapesDisplay';

import './SetOfShapesDisplayContainer.css';

class SetOfShapesDisplayContainer extends Component {
    render() {
        return (
            <div className="setOfShapesDisplayContainer">
            <p><b>Your saved set of SVG shapes</b></p>
            <button onClick={this.props.onDeleteAllShapes}>DELETE ALL SHAPES</button>
                <SetOfShapesDisplay />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteAllShapes: () => dispatch(actions.deleteAllShapes())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SetOfShapesDisplayContainer);
