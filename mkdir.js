#!/usr/bin/env node

"use strict";

require('./helper')
let fs = require('fs').promise
let argv = require('yargs').argv
function* mkdir() {
    let paths = argv._[0].split("/")
    for (let path in paths ){
      //console.log(paths[path])
      yield fs.mkdir(paths[path])
    }
}

module.exports = mkdir
