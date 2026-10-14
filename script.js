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
firstInput.addEventListener('focus', ()=> lastActiveInput = firstInput)
secondInput.addEventListener('focus', ()=> lastActiveInput = secondInput)

//any where user click the focus stay on the last active input
window.addEventListener('mousedown', (e)=>{
    if(!e.target.matches('input') && !e.target.matches('.unit')){
        e.preventDefault()

        lastActiveInput.focus()
    }

})

// formula to cal Length units
function calLengthUnit(input) {
    if (firstUnit === 'm' && firstInput.value === '') {
        console.log(input * length[`${secondUnit}`])
    }
    else if (secondUnit === 'm' && secondInput.value === '') {
        console.log(input * length[`${firstUnit}`])

    }
    else {
        if (secondInput.value !== '') {
            const m = input * length[`${secondUnit}`]
            console.log(m / length[`${firstUnit}`])
        }
        else if (firstInput.value !== '') {
            const m = input * length[`${firstUnit}`]
            console.log(m / length[`${secondUnit}`])
        }
    }
}

const btns = document.querySelectorAll('.btn')
const numBtns = document.querySelectorAll('.num-btn')

//click on button to get value at active input
numBtns.forEach((numBtn)=>{
    numBtn.addEventListener('click', ()=>{
       if(lastActiveInput.value.length < 11 ){
         lastActiveInput.value += numBtn.textContent

        //  calLengthUnit(lastActiveInput.value)
       }
    })
})

const clearAllBtn = document.querySelector('#clear-all')
const backspaceBtn = document.querySelector('#backspace')

// delete the last num
backspaceBtn.addEventListener('click', ()=> {
    lastActiveInput.value = lastActiveInput.value.slice(0,-1)

})

// clear the whole input
clearAllBtn.addEventListener('click', ()=> {
    lastActiveInput.value = null
})