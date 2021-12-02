// Challenge 1: String saver ****************************************************************************

// Query elements
const stringSaverForm = document.querySelector("#stringSaver")
const stringSaverInput = document.querySelector("#stringSaverInput")
const savedString = document.querySelector("#savedString")

// On page load, get local storage info
const savedStringValue = localStorage.getItem('savedStringValue')

if(savedStringValue === null) {
    savedString.innerText = 'Local storage is empty!'
}
else {
    savedString.innerText = savedStringValue
}

// On form submit, save to local storage
stringSaverForm.addEventListener('submit', e => {

    e.preventDefault()
    localStorage.setItem('savedStringValue', stringSaverInput.value)

})

// Challenge 2: Page load counter ************************************************************************

// Query elements
const pageCounterForm = document.querySelector("#pageCounter")
const counter = document.querySelector("#counter")

// On page load, get local storage info
let savedCount = localStorage.getItem('savedCount')

if(savedCount === null) {
    savedCount = 0
    counter.innerHTML = savedCount
}
else {
    counter.innerHTML = savedCount
}

// On page refresh, save to local storage
savedCount++
localStorage.setItem('savedCount', savedCount)

// Challenge 3: List builder *****************************************************************************

// Query elements
const listBuilderForm = document.querySelector("#listBuilderForm")
const listBuilderInput = document.querySelector("#listBuilderInput")
const orderedList = document.querySelector("#orderedList")

// Default list string
orderedList.innerText = "Your list is empty!"

listBuilderForm.addEventListener('submit', e => {

    e.preventDefault()

    // Make new list item
    const newItem = listBuilderInput.value

    // Add new list item to our saved array
    let items = localStorage.getItem('items')
    if(items === null) {
        orderedList.innerText = ""
        items = [newItem]
        localStorage.setItem('items', JSON.stringify(items))
        // Creates first li
        const li = document.createElement("li")
        li.innerText = items
        orderedList.appendChild(li)
    }
    else {
        items = JSON.parse(items)
        items.push(newItem)
        localStorage.setItem('items', JSON.stringify(items))
        // Creates rest of li's
        const li = document.createElement("li")
        li.innerText = items[items.length - 1]
        orderedList.appendChild(li)
    }

})