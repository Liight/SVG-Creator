import * as actionTypes from './actionTypes';

export const convertShapeToSVGAndAddToCollection = shape => {
    return {
        type: actionTypes.CONVERT_SHAPE_TO_SVG_AND_ADD_TO_COLLECTION,
        shape: shape
    }
};

export const clearShapesDisplay = () => {
    return {
        type: actionTypes.CLEAR_SHAPES_DISPLAY,
        shapesDisplayShouldBeCleared: true
    }
};

export const readyShapesDisplayForShapes = () => {
    return {
        type: actionTypes.READY_SHAPES_DISPLAY_fOR_SHAPES,
        shapesDisplayShouldBeCleared: false
    }
};

export const setShapeToBeSaved = () => {
    return {
        type: actionTypes.SET_SHAPE_TO_BE_SAVED,
    }
};

export const saveShapeToSetOfShapes = (shape) => {
    return {
        type: actionTypes.SAVE_SHAPE_TO_SET_OF_SHAPES,
        shape: shape
    }
};

export const enableSaveShape = () => {
    return {
        type: actionTypes.ENABLE_SAVE_SHAPE
    }
}

export const removeShapeFromSetOfShapes = (key) => {
    return {
        type: actionTypes.REMOVE_SHAPE_FROM_SET_OF_SHAPES,
        shapeKey: key
    }
}

export const downloadShape = (key) => {
    return {
        type: actionTypes.DOWNLOAD_SHAPE,
        shapeKey: key
    }
}