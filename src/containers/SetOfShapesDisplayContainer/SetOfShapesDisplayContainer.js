import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetOfShapesDisplay from '../../components/SetOfShapesDisplay/SetOfShapesDisplay';

import './SetOfShapesDisplayContainer.css';

class SetOfShapesDisplayContainer extends Component {
    render() {
        return (
            <div className="setOfShapesDisplayContainer">
            <p><b>Your saved set of SVG shapes</b></p>
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SetOfShapesDisplayContainer);
