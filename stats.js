const os = require('os')
const log = require('./logger')

// memory tracker - node live

setInterval(() => {

    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)
    
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }
    console.clear()
    console.table(stats)

    log('rodando...')

}, 1000)

