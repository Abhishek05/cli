#!/usr/bin/env node

"use strict";

require('./helper')
let fs = require('fs').promise
let argv = require('yargs').argv
function* touch() {
    // Use 'yield' in here
    // Your implementation here
    //console.log(argv._[0])
    //console.log(process.argv[2])i
    let fd = yield fs.open(argv._[0], 'r');
    fs.futimes(fd, new Date(), new Date())
   // console.log(yield fs.readFile(argv._[0],'utf8',console.log))
}

module.exports = touch
