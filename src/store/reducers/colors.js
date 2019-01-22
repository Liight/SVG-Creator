import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    colors: {
        black: "black",
        gray: "gray",
        brown: "brown",
        blue: "blue",
        red: "red",
        gold: "gold",
        green: "green",
        purple: "purple"
    },
    currentColor: "black"
}

const changeColor = (state, action) => {
    return updateObject(state, { currentColor: action.color });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_COLOR: return changeColor(state, action);
        default: return state;
    }
}

export default reducer;