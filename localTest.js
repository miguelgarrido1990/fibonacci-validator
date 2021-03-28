const FibonacciService = require('./src/services/fibonacciService')

const buildSequence = (length, errorProbability) => {
    let sequence = [0, 1]
    for(let i=2; i<Math.max(length, 2); i++)
        sequence[i] = sequence[i-1] + sequence[i-2]

    return sequence
}

const addErrors = (sequence, errorProbability) => {
    let errCount = 0
    for (let i=0; i<sequence.length; i++) {
        if (Math.random() <= errorProbability) {
            errCount += 1
            sequence[i] = random(1000)
        }
    }
    console.log(`Inserted ${errCount} errors`)
    return sequence
}

const random = max => Math.floor(max * Math.random())

const shuffle = sequence => sequence.sort(() => Math.random> .5)

const simulate = (length, errorProbability) => {
    let inputSequence = buildSequence(length)
    inputSequence = addErrors(inputSequence, errorProbability)
    inputSequence = shuffle(inputSequence)

    console.log(inputSequence.join(' '))

    const filteredSequence = FibonacciService.filterSequence(inputSequence)

    console.log(filteredSequence.join(' '))
}

// Simulating with an error probability of 10%
const maxLength = 100
const errorProbability = .1
simulate(random(maxLength), errorProbability)
