# fibonacci-validator
The fibonacci validator is formed of 1 lambda function and 2 queues, each one acting as input and output.

The sequences sent to the input queue will get picked up by the function, the function will filter out the invalid numbers and they will be sent to the output queue to continue through the pipeline.

The file `localTest.js` generates a unsorted sequence of fibonacci numbers of a random length of up to 100 numbers and with 10% errors. Note that there can be errors that go undetected if the inserted number is a valid fibonacci number.
