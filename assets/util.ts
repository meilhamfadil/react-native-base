const currencyFormat = (number: string) => {
    return "Rp" + parseInt(number).toFixed(0)
}

const booleanInt = (condition: boolean) => {
    return condition ? 1 : 0
}

export default {
    currencyFormat: currencyFormat,
    booleanInt: booleanInt
}