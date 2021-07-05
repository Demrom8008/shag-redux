import {ADD_CIRCLE, ADD_RECTANGLE, ADD_INFO, REMOVE_CIRCLE, REMOVE_RECTANGLE, SUBMIT_FORM} from "./types";
import {createCircle} from "../figures/circle/renderCircle";
import {createRectangle} from "../figures/rectangle/renderRectangle";

export function addCircle() {
    return {
        type: ADD_CIRCLE,
        payload: createCircle()
    }
}

export function addRectangle() {
    return {
        type: ADD_RECTANGLE,
        payload: createRectangle()
    }
}

export function removeCircle(event) {
    return {
        type: REMOVE_CIRCLE,
        payload: event
    }
}

export function removeRectangle(event) {
    return {
        type: REMOVE_RECTANGLE,
        payload: event
    }
}

export function submitForm() {
    return {
        type: SUBMIT_FORM
    }
}

export function addTitle(event) {
    return {
        type: ADD_INFO,
        payload: event
    }
}