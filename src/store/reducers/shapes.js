import React from 'react';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

import * as utilities from '../../shared/utility';

const initialState = {
    shapeTypes: {
        polyline: {
            key: "",
            points: "",
            fill: "",
            stroke: "",
            strokeWidth: "",
        }
    },
    shapesDisplayShouldBeCleared: false,
    addedShapes: null,
    canSaveShape: false,
    saveThisShape: false,
    shapeSet: []
}

const enableSaveShape = (state, action) => {
    return updateObject(state, { canSaveShape: true })
}

const setShapeToBeSaved = (state, action) => {
        console.log('inside setShapeToBeSaved reducer')
        return updateObject(state, { saveThisShape: true });
} ;

const saveShapeToSetOfShapes = (state, action) => {
    // Check for a duplicate key
    console.log('inside saveShapeToSetOfShapes')
    let check = [];
    check = state.shapeSet.filter(shp => shp.key === action.shape.key);
    if(check.length > 0){
        console.log('check', check.length, check, action.shape.key)
        check = [];
        return state;
    };
    return updateObject(state, { 
        shapeSet: [...state.shapeSet, action.shape],
        saveThisShape: false
    });
}

const removeShapeFromSetOfShapes = (state, action) => {
    console.log('inside removeShapeFromSetOfShapes, key: ' + action.shapeKey)
    const newShapeSet = state.shapeSet.filter(shp => shp.key !== action.shapeKey )
    return updateObject(state, { shapeSet: newShapeSet })
}

const clearShapesDisplay = (state, action) => {
    console.log("in clearShapesDisplay reducer")
    if(action.shapesDisplayShouldBeCleared){
        return updateObject(state, { 
            shapesDisplayShouldBeCleared: true ,
            addedShapes: null,
            canSaveShape: false
        })
    }
    return state;
}

const readyShapesDisplayForShapes = (state, action) => {
    console.log("readyShapesDisplayForShapes reached")
    if(!action.shapesDisplayShouldBeCleared){
        return updateObject(state, { shapesDisplayShouldBeCleared: false })
    }
    return state;
}

const convertShapeToSVGAndAddToCollection = (state, action) => {
    if(action.shapesDisplayShouldBeCleared){ return state; }
    console.log('reducer action', action)
    const polylineHTML = (
        <path
            key={action.shape.key}
            d={"M"+action.shape.points}
            fill={action.shape.fill}
            stroke={action.shape.stroke}
            strokeWidth={action.shape.strokeWidth}
        />);
        // With this we can add a back button to load the previous shape state
        if(state.addedShapes !== null){
            let updatedState = {
                addedShapes: [...state.addedShapes, polylineHTML]
            }
            return updateObject(state, updatedState);
        } else {
            let updatedState = {
                addedShapes: [polylineHTML]
            }
            return updateObject(state, updatedState);
        }

    // console.log('current state', state, 'state changes', updatedState)
    
};

const downloadShape = (state, action) => {
    console.log('inside download shape');
        // Check for a duplicate key
        let selectedShape = [];
        selectedShape = state.shapeSet.filter(shp => shp.key === action.shapeKey);
        console.log('key check', action.shapeKey, selectedShape)
        if(selectedShape.length > 0){
            let dlShapeAsXml = utilities.convertSvgToXml(selectedShape[0], "svg");
            utilities.fileFactory(dlShapeAsXml);
            selectedShape = [];
            return state;
        };
        return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONVERT_SHAPE_TO_SVG_AND_ADD_TO_COLLECTION: return convertShapeToSVGAndAddToCollection(state, action);
        case actionTypes.CLEAR_SHAPES_DISPLAY: return clearShapesDisplay(state, action);
        case actionTypes.READY_SHAPES_DISPLAY_fOR_SHAPES: return readyShapesDisplayForShapes(state, action);
        case actionTypes.ENABLE_SAVE_SHAPE: return enableSaveShape(state, action);
        case actionTypes.SET_SHAPE_TO_BE_SAVED: return setShapeToBeSaved(state, action);
        case actionTypes.SAVE_SHAPE_TO_SET_OF_SHAPES: return saveShapeToSetOfShapes(state, action);
        case actionTypes.REMOVE_SHAPE_FROM_SET_OF_SHAPES: return removeShapeFromSetOfShapes(state, action)
        case actionTypes.DOWNLOAD_SHAPE: return downloadShape(state, action);
        default: return state;
    }
};

export default reducer;