import {removeBtn} from "../createRemoveBtn";

export function createCircle() {
    const storage = document.createElement('div')
    const circle = document.createElement('div')
    const svg = document.createElement('div')

    circle.classList.add('circle', 'm-2')
    storage.classList.add('row', 'm-2')
    svg.classList.add('d-flex', 'align-items-center')
    circle.setAttribute('id', `${Date.now()}`)

    svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">\n' +
        '            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>\n' +
        '            </svg>' +
        '<div class="value align-items-center ml-5"></div>'

    storage.append(removeBtn())
    storage.append(circle)
    storage.append(svg)

    return storage
}