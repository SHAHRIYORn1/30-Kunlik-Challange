let noDoneTask = document.querySelector('.noDoneTask')
let doneTask = document.querySelector('.doneTask')
let input = document.querySelector('input')
let add_button = document.querySelector('button')
let taskContainer = document.querySelector('.taskContainer')
let noDoneTaskValue = 0
let doneTaskValue = 0


function taskCountAdd(a, aValue, b) {
    aValue++
    a.textContent = b + aValue
    return aValue
}

function taskCountMinus(b, bValue, b2) {
    bValue = bValue - 1
    b.textContent = b2 + bValue
    return bValue
}

add_button.addEventListener('click', () => {    
    let inputValue = input.value
    noDoneTaskValue = taskCountAdd(noDoneTask, noDoneTaskValue, "No done task:")
    let div = document.createElement('div')

    div.innerHTML = 
    `
       <div class="taskDiv">
            <span class="cicrle"></span>
            <span class="text">${inputValue.trim()}</span>
        </div> 
    `

    let cicrleSpan = div.querySelector('.cicrle')

    cicrleSpan.addEventListener('click', () => {
        div.remove()
        doneTaskValue = taskCountAdd(doneTask, doneTaskValue, "Done task:")
        noDoneTaskValue = taskCountMinus(noDoneTask, noDoneTaskValue, "No done task:")
    })
        

    taskContainer.appendChild(div)
    input.value = ''
    input.focus()
})

