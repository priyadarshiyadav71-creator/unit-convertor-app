const length = {
    // metric units
    m: 1,
    cm: 0.01,
    mm: 0.001,
    km: 1000,

    // imperial units
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.344
}

const firstUnitOption = document.querySelector("#select-unit-first")
const secondUnitOption = document.querySelector("#select-unit-second")
const firstInput = document.querySelector('#first-input')
const secondInput = document.querySelector('#second-input')

const firstUnit = firstUnitOption.value
const secondUnit = secondUnitOption.value

let lastActiveInput = firstInput

//store the last active input after click
firstInput.addEventListener('focus', () => lastActiveInput = firstInput)
secondInput.addEventListener('focus', () => lastActiveInput = secondInput)

//any where user click the focus stay on the last active input
window.addEventListener('mousedown', (e) => {
    if (!e.target.matches('input') && !e.target.matches('.unit')) {
        e.preventDefault()

        lastActiveInput.focus()
    }

})

// formula to cal Length units
function calLengthUnit(input) {
    if (firstUnitOption.value === 'm' && lastActiveInput === secondInput) {
        firstInput.value = formatter.format(input * length[`${secondUnitOption.value}`])
    }
    else if (secondUnitOption.value === 'm' && lastActiveInput === firstInput) {
        secondInput.value = formatter.format(input * length[`${firstUnitOption.value}`])

    }
    else {
        if (lastActiveInput === secondInput) {
            const m = input * length[`${secondUnitOption.value}`]
            firstInput.value = formatter.format(m / length[`${firstUnitOption.value}`])
        }
        else if (lastActiveInput === firstInput) {
            const m = input * length[`${firstUnitOption.value}`]
            secondInput.value = formatter.format(m / length[`${secondUnitOption.value}`])
        }
    }
}

const btns = document.querySelectorAll('.btn')
const numBtns = document.querySelectorAll('.num-btn')

//click on button to get value at active input
numBtns.forEach((numBtn) => {
    numBtn.addEventListener('click', () => {
        if (lastActiveInput.value.length < 11) {
            lastActiveInput.value += numBtn.textContent

            calLengthUnit(lastActiveInput.value)
        }
    })
})

const clearAllBtn = document.querySelector('#clear-all')
const backspaceBtn = document.querySelector('#backspace')

// delete the last num
backspaceBtn.addEventListener('click', () => {
    lastActiveInput.value = lastActiveInput.value.slice(0, -1)
    calLengthUnit(lastActiveInput.value)
})

// clear the whole input
clearAllBtn.addEventListener('click', () => {
    lastActiveInput.value = ''
    calLengthUnit(lastActiveInput.value)

})

// grabbing both input box 
const numInputs = document.querySelectorAll('.num-input')


// now also user get the converted values using key press using keyboard
numInputs.forEach((numInput) => {
    numInput.addEventListener('input', () => {
        calLengthUnit(lastActiveInput.value)
    })
})

// to make output numbers decimal upto 8
const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 8,
    useGrouping: false
})

// whenever user changes units it give converted value instantly
secondUnitOption.addEventListener('change', ()=>{
    calLengthUnit(lastActiveInput.value)
})

firstUnitOption.addEventListener('change', ()=>{
    calLengthUnit(lastActiveInput.value)
})
