import {addCircle, removeCircle} from "../../redux/actions";

const addCircleBtn = document.getElementById('add-circle')

export function circleEvents(store) {
    addCircleBtn.addEventListener('click', () => {
        store.dispatch(addCircle())
    })
}

export function deleteCircle(store, circleArea) {
    circleArea.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            store.dispatch(removeCircle(event))
        }
    })
}