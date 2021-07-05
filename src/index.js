import {createStore} from "./redux/createStore";
import {deleteRectangle, rectangleEvents} from "./figures/rectangle/rectangleEvents";
import {circleEvents, deleteCircle} from "./figures/circle/circleEvents";
import {rootReducer} from "./redux/rootReducer";
import {addTitle, submitForm} from "./redux/actions";

const storageArea = document.getElementById('storage')
const circleArea = document.getElementById('circle')
const rectArea = document.getElementById('rectangle')
const circleBtn = document.getElementById('add-circle')
const rectBtn = document.getElementById('add-rect')

const store = createStore(rootReducer)

rectangleEvents(store)
circleEvents(store)

storageArea.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.classList.contains('bi')) {
        store.dispatch(submitForm())
        store.dispatch(addTitle(event))
    }
})

deleteCircle(store, circleArea)
deleteRectangle(store, rectArea)

store.subscribe(() => {
    const state = store.getState()

    circleArea.querySelectorAll('.circle').length === 5 ? circleBtn.disabled = true : circleBtn.disabled = false
    rectArea.querySelectorAll('.rect').length === 5 ? rectBtn.disabled = true : rectBtn.disabled = false

    document.getElementById('title').value = ''
    document.getElementById('value').value = ''

    if (state.form.value > 100 || state.form.value < 0) {
        console.log('Error')
    }
})

store.dispatch({type: 'INIT_STATE'})

