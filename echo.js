#!/usr/bin/env node

"use strict";

require('./helper')
let fs = require('fs').promise
let argv = require('yargs').argv
function* echo() {
    // Use 'yield' in here
    // Your implementation here
    console.log(argv._[0])
    //console.log(process.argv[2])
    //console.log(yield fs.readFile(__filename, console.log))
}

module.exports = echo
