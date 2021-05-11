const os = require('os')

// console.log(os.platform())

const { freemem, totalmem } = os

console.log(freemem(), totalmem())

console.log("teste")