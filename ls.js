#!/usr/bin/env node


"use strict";
require('./helper')
let fs = require('fs').promise
let _ = require('underscore')
let path = require('path')
let argv = require('yargs').argv
let rc = argv.R

function* ls() {
  console.log('Executing ls function...')
  yield re(argv._[0])
}

function* re(filepath) {
	var lsPromises = []
  let stat = yield fs.stat(filepath);
	if (stat.isDirectory()) {
    let fileNames = yield fs.readdir(filepath)
    for (var f in fileNames) {
         let p = path.join(filepath, fileNames[f]);
          yield loop(p)
    }
	} else {
    console.log(filepath + 'is a file')
	}
}

function* loop(filepath) {
  var lsPromises = []
  if(rc){
    let stat = yield fs.stat(filepath);
     if (!stat.isDirectory()) {
      console.log(filepath);
     }else{
        yield re(filepath)
       }
  }else{
    console.log(filepath);
  }
}

module.exports = ls
