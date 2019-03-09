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
    return updateObject(state, { canSaveShape: true, saveThisShape: false })
}

const setShapeToBeSaved = (state, action) => {
        console.log('inside setShapeToBeSaved reducer')
        return updateObject(state, { saveThisShape: true, canSaveShape: false });
} ;

const saveShapeToSetOfShapes = (state, action) => {
    console.log('inside saveShapeToSetOfShapes', action, 'previous state.shapeSet', state.shapeSet)
    return updateObject(state, { 
        shapeSet: [...state.shapeSet, action.shape],
        saveThisShape: false,
        canSaveShape: false
    });
    
}

const removeShapeFromSetOfShapes = (state, action) => {
    // console.log('inside removeShapeFromSetOfShapes, key: ' + action.shapeKey)
    // const newShapeSet = state.shapeSet.filter(shp => shp.key !== action.shapeKey )
    // return updateObject(state, { shapeSet: newShapeSet })
    return state;
}

const clearShapesDisplay = (state, action) => {
    console.log("in clearShapesDisplay reducer")
        return updateObject(state, { 
            shapesDisplayShouldBeCleared: true ,
            addedShapes: null,
            canSaveShape: false
    })
};

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
    const pathHTML = (
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
                addedShapes: [...state.addedShapes, pathHTML],
                canSaveShape: true
            }
            return updateObject(state, updatedState);
        } else {
            let updatedState = {
                addedShapes: [pathHTML],
                canSaveShape: true
            }
            return updateObject(state, updatedState);
        }

    // console.log('current state', state, 'state changes', updatedState)
    
};

const downloadShape = (state, action) => {
    console.log('inside download shape');
        // Check for the correct set of shapes
        let selectedShape = [];
        try{
            selectedShape = state.shapeSet.filter((subArr) => subArr[subArr.length-1].key === action.shapeKey);
        }
        catch(err){ console.log('error', err, ' patience is a virtue, please try again') }

        console.log('key check', action.shapeKey);
        console.log('selected shape', selectedShape);
        // Assumes checks are finished before this point
        if(selectedShape.length > 0){
            let dlShapeAsXml = utilities.convertSvgToXml(selectedShape, "svgSet");
            utilities.fileFactory(dlShapeAsXml);
            selectedShape = [];
            return state;
        };
        return state;
};

const deleteAllShapes = (state, action) => {
    if (window.confirm("Are you sure you want to delete all your saved shapes?")){
        return updateObject(state, { shapeSet: [] })
    } else {
        return state;
    }
    
}

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
        case actionTypes.DELETE_ALL_SHAPES: return deleteAllShapes(state, action);
        default: return state;
    }
};

export default reducer;