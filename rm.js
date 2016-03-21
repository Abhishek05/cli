#!/usr/bin/env node

"use strict";

require('./helper')
let fs = require('fs').promise
let argv = require('yargs').argv
let path = require('path')
function* rm() {
    yield deletef(argv._[0])
}

function* deletef(filepath) {
       let stat = yield fs.stat(filepath);
       if(stat.isDirectory()){
         let fileNames = yield fs.readdir(filepath);
         for (let f in fileNames) {
           let p = path.join(filepath, fileNames[f]);
           yield deletef(p);
         }
         yield fs.rmdir(filepath);
       }else{
         yield fs.unlink(filepath);
       }
};

module.exports = rm
