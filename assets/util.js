const currencyFormat = (number) => {
    return "Rp" + parseInt(number).toFixed(0)
}

const booleanInt = (condition) => {
    return condition ? 1 : 0
}

export default {
    currencyFormat: currencyFormat,
    booleanInt: booleanInt
}