const FibonacciService = require('./services/fibonacciService')
const AWS = require('aws-sdk')
const sqs = new AWS.SQS();

const sendSQSMessage = data => {
    const params = {
      MessageBody: JSON.stringify(data),
      QueueUrl: process.env.OUTPUT_QUEUE,
    }
  
    return sqs.sendMessage(params).promise()
}

exports.handler = async function (event) {
    if (!event.sequence) {
        console.error('Missing sequence parameter')
        return
    }

    const inputSequence = event.sequence
    if (!inputSequence instanceof Array) {
        console.error('Invalid sequence parameter type. It should be an array')
        return
    }
    const filteredSequence = FibonacciService.filterSequence(inputSequence)
    await sendSQSMessage({ sequence: filteredSequence })
}

