import * as actionTypes from './actionTypes';

export const changeColors = (color) => {
    return {
        type: actionTypes.CHANGE_COLOR,
        color: color
    }
}