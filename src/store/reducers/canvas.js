// import React from 'react';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    canvasShouldBeClear: false
}

const clearCanvas = (state, action) => {
    console.log('clearCanvas reducer reached')
    if(action.clearCanvas){
        return updateObject(state, { canvasShouldBeClear: true })
    }
    return state;
}

const readyCanvasForDrawing = (state, action) => {
    console.log('readyCanvasForDrawing reducer reached')
    if(action.readyCanvasForDrawing){
        return updateObject(state, { canvasShouldBeClear: false })
    }
    return state;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLEAR_CANVAS: return clearCanvas(state, action)
        case actionTypes.READY_CANVAS_FOR_DRAWING: return readyCanvasForDrawing(state, action)
        default: return state;
    }
};

export default reducer;