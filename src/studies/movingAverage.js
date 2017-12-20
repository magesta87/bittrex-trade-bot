const MIN_PRICE_HISTORY = 15
const PERIOD_SIZE = 15

function calculateMovingAverage(pricesHistory) {
    if (pricesHistory.length < MIN_PRICE_HISTORY) {
        return 0
    }

    const useHistory = pricesHistory.slice(0, PERIOD_SIZE)
    const total = sumArray(useHistory)

    return total / useHistory.length
}

function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

module.exports = {
    calculateMovingAverage
}
