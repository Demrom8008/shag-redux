import {ADD_CIRCLE, ADD_RECTANGLE, ADD_INFO, REMOVE_CIRCLE, REMOVE_RECTANGLE, SUBMIT_FORM} from "./types";
import {combineReducers} from "redux";
import {removeElement} from "../figures/removeElement";

let initialState = {
    circle: {
        element: document.getElementById('circle-store')
    },
    rectangle: {
        element: document.getElementById('rectangle-store')
    },
    form: {
        title: '',
        value: 0
    }

}

function circleReducer(state = initialState.circle, action) {
    switch (action.type) {
        case ADD_CIRCLE:
            return {...state, render: state.element.append(action.payload)}
        case REMOVE_CIRCLE:
            return {...state, remove: removeElement(action.payload)}
        default: return state
    }
}

function rectangleReducer(state = initialState.rectangle, action) {
    switch (action.type) {
        case ADD_RECTANGLE:
            return {...state, render: state.element.append(action.payload)}
        case REMOVE_RECTANGLE:
            return {...state, remove: removeElement(action.payload)}
        default: return state
    }
}

function formReducer(state = initialState.form, action) {
    switch (action.type) {
        case SUBMIT_FORM:
            return {
                ...state,
                title: document.getElementById('title').value,
                value: state.value + document.getElementById('value').value
            }
        case ADD_INFO:
            return {
                ...state,
                renderTitle: action.payload.target.parentNode.querySelector('.value').textContent = state.title,
                renderValueRect: action.payload.target.parentNode.parentElement.querySelector('.rect').textContent = state.value,
                renderValueCircle: action.payload.target.parentNode.parentElement.querySelector('.circle').textContent = state.value
            }
        default: return state
    }
}

export const rootReducer = combineReducers({
    circle: circleReducer,
    rectangle: rectangleReducer,
    form: formReducer
})