let fibonnaciNumbers = [0, 1]
const validateNumber = n => {
    if (n === 0 || n === 1)
       return true

    if (fibonnaciNumbers.indexOf(n) != -1)
        return true

    while (fibonnaciNumbers[fibonnaciNumbers.length - 1] < n) {
        const next = fibonnaciNumbers[fibonnaciNumbers.length - 1] + fibonnaciNumbers[fibonnaciNumbers.length - 2]
        fibonnaciNumbers.push(next)
        if (n == next)
            return true
    }

    return false
}

const filterSequence = inputSequence => {
    const validatedSequence = inputSequence.map(n => [n, validateNumber(n)])
    const filteredSequence = validatedSequence.filter(([n, valid]) => valid)
        .map(([n]) => n)
    const errors = validatedSequence.filter(([n, valid]) => !valid).length

    console.log(`Detected ${errors} errors`)
    return filteredSequence
}

exports.filterSequence = filterSequence