'use strict'

let loggers = require('./config/winston')

function tryForLog(){
    try{
        let a = ssssss;

    }catch(e){
        loggers.logger.error(e)

    }

}




module.exports.tryForLog = tryForLog;