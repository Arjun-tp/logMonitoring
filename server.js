'use strict'

let req = require("express");
let express = req();
const MongoClient = require('mongodb').MongoClient;
let config = require('./config/development');

const url = 'mongodb://localhost:27017';

let dbName = config.db.mongo.db;
console.log("Connected Successfully!" + dbName)

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    // let db = client.db(dbName);
express.listen(6040);
let winstonCall = require('./config/winston')
let tryLog = require('./try')

// winstonCall.logger.info('ssssssssssssssssssss')
// winstonCall.logger.error(err)
tryLog.tryForLog();
    
});

