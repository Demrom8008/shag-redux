import {addRectangle, removeRectangle} from "../../redux/actions";

const addRectBtn = document.getElementById('add-rect')

export function rectangleEvents(store) {
    addRectBtn.addEventListener('click', () => {
        store.dispatch(addRectangle())
    })
}

export function deleteRectangle(store, rectArea) {
    rectArea.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            store.dispatch(removeRectangle(event))
        }
    })
}