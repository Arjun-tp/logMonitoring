let appRoot = require('app-root-path');
let winston = require('winston');
const MESSAGE = Symbol.for('message');

const jsonFormatter = (logEntry) => {
  const base = {
    timestamp: new Date()
  };
  const json = Object.assign(base, logEntry)
  logEntry[MESSAGE] = JSON.stringify(json);
  return logEntry;
}




let options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    format: winston.format(jsonFormatter)(),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    timestamp: true
  },
  console: {
    level: 'error',
    format: winston.format(jsonFormatter)(),
    handleExceptions: true,
    json: true,
    colorize: true,
    timestamp: true
  }
};
let logger = winston.createLogger({
  transports: [
    // new winston.transports.File(options.file),
    // new winston.transports.Console(options.console),
    client.index({
      index: 'logs',
      type: "log",
      body: options.console
    }, function (err, resp, status) {
      console.log("Response================================", resp);
      console.log("status================================", status);
      console.log("Error================================", JSON,stringify(err));
    })
  ],
  exitOnError: false, // do not exit on handled exceptions,
});






//To Directly push to elastic without saving to a log file


// var winston = require('winston');
// var Elasticsearch = require('winston-elasticsearch');
// var esTransportOpts = {
//   level: 'info',
//   index : 'logs',
//   messageType : 'log',
//   timestamp : new Date().toISOString()
// };
// var abc = {
//   level: 'error',
//   index : 'logs',
//   messageType : 'log',
//   timestamp : new Date().toISOString()

// } 
// var logger = winston.createLogger({
//   transports: [
//     new Elasticsearch(esTransportOpts),
//     new Elasticsearch(abc)
//   ]
// });



module.exports.logger = logger;