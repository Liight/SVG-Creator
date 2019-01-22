import * as actionTypes from './actionTypes';

export const clearCanvas = () => {
    return {
        type: actionTypes.CLEAR_CANVAS,
        clearCanvas: true
    }
};

export const readyCanvasForDrawing = () => {
    return {
        type: actionTypes.READY_CANVAS_FOR_DRAWING,
        readyCanvasForDrawing: true
    }
};