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

function cal(input) {
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


