let number = document.querySelectorAll(".numbers")
let signs = document.querySelectorAll(".sign")

let btn_clear_all = document.querySelector("#clear-all")
let btn_clear = document.querySelector("#clear")
let equals = document.querySelector(".equals")
let btn_comma = document.querySelector(".comma")
let btn_percent = document.querySelector(".percent")
let btn_negative = document.querySelector(".negative")

let result = document.querySelector(".result")


let isFirstValue = false
let isSecondValue = false
let firstValue = ''
let secondValue = ''

let Signs = ''
let comma = ''

let resultValue = 0

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', (e) => {
        let atr = e.target.value
        if (isFirstValue === false) {
            getFirstValue(atr)
            getSigns()
        } if (isSecondValue == false) {
            getSecondValue(atr)
        }
    })
}


function getFirstValue(el) {
    result.innerHTML = ''
    firstValue += el
    result.innerHTML = firstValue
    firstValue = +firstValue
}

for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener('click', () => {
        result.innerHTML = 0
    })
}

function getSecondValue(el) {
    if (firstValue != '' && Signs != '') {
        result.innerHTML = ''
        secondValue += el
        result.innerHTML = secondValue
        secondValue = +secondValue
    }
}

function getSigns() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            isFirstValue = true
            Signs = e.target.value
            comma = ''
            console.log(Signs)
        })
    }
}

btn_negative.addEventListener('click', () => {

    if (firstValue != '' && secondValue === '' && Signs === '') {
        resultValue = -firstValue
        firstValue = resultValue
    }
    if (firstValue != '' && Signs != '' && secondValue != '') {
        resultValue = -secondValue
        secondValue = resultValue
    }
    result.innerHTML = resultValue
})

equals.addEventListener('click', () => {

    if (Signs === '+') {
        resultValue = firstValue + secondValue
    } else if (Signs === '-') {
        resultValue = firstValue - secondValue
    } else if (Signs === 'X') {
        resultValue = firstValue * secondValue
    } else if (Signs === '/') {
        resultValue = firstValue / secondValue
    }

    result.innerHTML = resultValue
    firstValue = resultValue
    secondValue = ''
    comma = ''

    checked()
})

btn_clear_all.addEventListener('click', () => {
    result.innerHTML = ''
    isFirstValue = false
    isSecondValue = false

    firstValue = ''
    secondValue = ''
    resultValue = ''

    Signs = ''
    comma = ''

})

btn_clear.addEventListener('click', () => {
    if (isFirstValue === false) {
        firstValue = ''
        result.innerHTML = ''
        comma = ''
    } else {
        secondValue = ''
        result.innerHTML = ''
        comma = ''
    }
})

btn_percent.addEventListener('click', () => {
    if (firstValue != '' && Signs === '') {
        resultValue = firstValue / 100
        firstValue = resultValue
    } else if (firstValue != '', Signs != '' && secondValue != '') {
        resultValue = secondValue / 100
        secondValue = resultValue
    }

    console.log(resultValue)
    result.innerHTML = resultValue
})

btn_comma.addEventListener('click', () => {
    if (isFirstValue === false) {
        if (firstValue === '') {
            resultValue = 0 + '.'
            firstValue = resultValue
            comma = '.'
        } else {
            if (comma === '') {
                firstValue = firstValue + '.'
                result.innerHTML = firstValue
                comma = '.'
            } else {
                return
            }
        }
    } else {
        if (secondValue === '') {
            resultValue = 0 + '.'
            secondValue = resultValue
            comma = '.'
        } if (comma === '') {
            secondValue = secondValue + '.'
            result.innerHTML = secondValue
            comma = '.'
        }
        else {
            return
        }
    }
})

function checked() {
    resultValue = JSON.stringify(resultValue)

    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue)
        result.innerHTML = resultValue.toFixed(2)
    }
}