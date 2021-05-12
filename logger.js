const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    // console.log(message)    
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err;
    })
})


// emitter.emit('log', "mensagem que eu quero")

function log(message) {
    emitter.emit('log', message)
}

// log("Passar uma mensagem")

module.exports = log //modular (mod export)

