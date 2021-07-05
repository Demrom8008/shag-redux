export function removeBtn() {
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('btn', 'btn-outline-danger', 'remove-btn')
    return removeBtn
}